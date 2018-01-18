export default function validTypes(value, validWords) {
	value = value.replace(/ +/g, "");
	value = value.toLowerCase();
    if (!validWords.includes(value)) {
        return false;
    }
    return true;
}