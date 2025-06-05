/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL =
	"https://script.google.com/macros/s/AKfycbz36k7IMA36kSFZWJkdPpbN7Oc5g-OBwfp0yC9oG21UQ8A23CGL8pY2yqeznKA8NeZV/exec";

/**
 * Fetches all person data from the Apps Script API.
 */

export async function getAllPerson() {
	try {
		const res = await fetch(BASE_URL, {
			next: { revalidate: 2 * 60 }, // Revalidate every 120 seconds
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch all people. Status: ${res.status}`);
		}

		const data = await res.json();
		return data;
	} catch (err: any) {
		console.error(err);
		throw new Error(`Error fetching all people: ${err.message}`);
	}
}

/**
 * Fetches data for a specific person by name.
 * @param name - The person's name
 */

export async function getPerson(name: string) {
	try {
		const url = `${BASE_URL}?name=${encodeURIComponent(name)}`;
		const res = await fetch(url, {
			next: { revalidate: 30 }, // Revalidate every 30 seconds
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch person: ${name}. Status: ${res.status}`);
		}

		const data = await res.json();
		return data;
	} catch (err: any) {
		console.error(err);
		throw new Error(`Error fetching person "${name}": ${err.message}`);
	}
}
