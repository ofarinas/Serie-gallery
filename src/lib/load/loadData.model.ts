import { dev } from '$app/environment';
import type { Episode, Serie } from '$lib/components/serie.model';

const serieNameIds = [
	'70533',
	'71663',
	'74608',
	'77398',
	'78804',
	'80379',
	'81670',
	'83462',
	'121361',
	'158661',
	'248741',
	'248742',
	'248835',
	'255316',
	'259972',
	'264108',
	'266189',
	'269586',
	'274431'
];

export async function loadSerieCatalog() {
	let serieCatalog: Serie[] = [];
	serieNameIds.forEach(async (nameId) => {
		serieCatalog.push(await loadSerie(nameId));
	});
	console.log('serieCatalog', serieCatalog);

	return serieCatalog;
}

async function loadSerie(nameId: string): Promise<Serie> {
	const url = dev ? `static/${nameId}.xml` : `${nameId}.xml`;
	const response = await fetch(url);
	const text = await response.text();
	const xml = new window.DOMParser().parseFromString(text, 'text/xml');
	let episodiosCollection = xml.getElementsByTagName('Episode');
	let serieCollection = xml.getElementsByTagName('Series');
	let episodes = getEpisodes(episodiosCollection);

	return getSerie(serieCollection, episodes);
}

function getEpisodes(episodiosCollection: HTMLCollection): Episode[] {
	let listXml = Array.prototype.slice.call(episodiosCollection);
	const episodeList = listXml.map((value) => {
		return {
			id: getContent(value, 'id'),
			EpisodeName: getContent(value, 'EpisodeName'),
			Director: getContent(value, 'Director'),
			Language: getContent(value, 'Language'),
			Overview: getContent(value, 'Overview'),
			EpisodeNumber: getContent(value, 'EpisodeNumber'),
			Rating: getContent(value, 'Rating')
		} as Episode;
	});

	return episodeList;
}

function getSerie(serieCollection: HTMLCollection, episodes: Episode[]): Serie {
	let serieXml = Array.prototype.slice.call(serieCollection);
	const serie: Serie = {
		id: getContent(serieXml[0], 'id'),
		Actors: getContent(serieXml[0], 'Actors'),
		Overview: getContent(serieXml[0], 'Overview'),
		Rating: getContent(serieXml[0], 'Rating'),
		SeriesName: getContent(serieXml[0], 'SeriesName'),
		Episodes: episodes
	};

	return serie;
}

function getContent(xmlObj: any, tagName: string): string {
	return xmlObj.getElementsByTagName(tagName)[0]?.textContent;
}
