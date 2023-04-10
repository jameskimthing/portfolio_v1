// A delay for an element of id
const delays: { [id: string]: number } = {};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(async (entry) => {
		await new Promise((res) => setTimeout(res, delays[entry.target.id]));
		const axis = entry.target.classList.contains('-translate-x-full')
			? 'translate-x-0'
			: 'translate-y-0';
		entry.isIntersecting
			? entry.target.classList.add('opacity-100', axis)
			: entry.target.classList.remove('opacity-100', axis);
	});
});

// Add an object to observe (with direction && delay)
type Directions = 'horizontal' | 'vertical';
let idGenerator: number = 0;
function observeObject(element: HTMLDivElement, direction: Directions, delay: number) {
	element.id = `${idGenerator}`;
	delays[idGenerator] = delay;

	direction === 'horizontal'
		? element.classList.add('-translate-x-full')
		: element.classList.add('-translate-y-full');

	observer.observe(element);
	idGenerator++;
}

export { observeObject };
export type { Directions };
