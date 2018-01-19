export default function validTypes(value, validWords) {
	value = value.toLowerCase().replace(/ +/g, "");
    if(!validWords.includes(value)) {
        return false;
    }
    return true;
}