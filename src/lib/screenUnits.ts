import { get, writable, type Writable } from 'svelte/store';

// const screenUnits: Writable<number> = writable(0);

type CurrentPart = 'none' | 'about' | 'projects' | 'contact';
const currentPart: Writable<CurrentPart> = writable('none');
const scroll: Writable<number> = writable(0);

const screenUnitsPerSection: { [key in CurrentPart]?: { start: number; end: number } } = {
	about: { start: 1, end: 3 },
	projects: { start: 4, end: 12 }
};

let height: number;

function setCurrentPart(sc: number, he: number) {
	scroll.set(sc);
	height = he;

	const s = sc / height;

	for (const [name, duration] of Object.entries(screenUnitsPerSection)) {
		if (s >= duration['start'] && s < duration['end']) return currentPart.set(name as CurrentPart);
	}
	currentPart.set('none');
}

function moveToPart(section: CurrentPart) {
	window.scrollTo({
		top: section === 'contact' ? height * 13 : screenUnitsPerSection[section]!['start'] * height,
		left: 0,
		behavior: 'smooth'
	});
}

function getRatioDoneOnScroll(s: number): number {
	const part = screenUnitsPerSection[get(currentPart)];
	if (!part) return 0;

	const totalScrollOnPart = (part['end'] - part['start']) * height;
	const currentScrollOnPart = s - part['start'] * height;

	return currentScrollOnPart / totalScrollOnPart;
}

export {
	currentPart,
	screenUnitsPerSection,
	setCurrentPart,
	moveToPart,
	scroll,
	getRatioDoneOnScroll
};
export type { CurrentPart };
