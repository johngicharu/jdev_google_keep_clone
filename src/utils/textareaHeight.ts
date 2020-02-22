// Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.Yes, this is the first note, I think I am loving this app so far.

type TextareaAutoHeight = (
	textarea: HTMLTextAreaElement,
	minRows: number,
	maxRows: number
) => void;

const textAreaAutoHeight: TextareaAutoHeight = (textarea, minRows, maxRows) => {
	const textareaLineHeight = 24;

	const previousRows = textarea.rows;
	textarea.rows = minRows; // reset number of rows in textarea

	const currentRows = ~~(textarea.scrollHeight / textareaLineHeight);

	if (currentRows === previousRows) {
		textarea.rows = currentRows;
	}

	if (currentRows >= maxRows) {
		textarea.rows = maxRows;
		textarea.scrollTop = textarea.scrollHeight;
	}

	if (textarea.value.trim() === "") {
		textarea.parentElement!.style.height = "150px";
	} else {
		textarea.parentElement!.style.height = "auto";
	}
};

export default textAreaAutoHeight;
