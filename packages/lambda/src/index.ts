export async function main() {
	const msg = `Hello World! The time is ${new Date().toString()}`;
	console.log(msg);
	return Promise.resolve(msg);
}
