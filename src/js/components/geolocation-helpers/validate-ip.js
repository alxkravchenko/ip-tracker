export function validateIp(ip) {
	const errEl = document.querySelector('.js-form-error');

	if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(ip)) {
		return true;
	}
	return false;
}
