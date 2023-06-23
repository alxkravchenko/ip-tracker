export async function getAddress(ip = '8.8.8.8') {
	const response = await fetch(
		`https://geo.ipify.org/api/v2/country,city?apiKey=at_BwQp5VAtUSwoPoURorcUQUqE5Uetv&ipAddress=${ip}`,
	)
	return await response.json();
		// .then((response) => response.json())
		// .then((data) => renderInfo(data)); // или просто .then(renderInfo)
}
