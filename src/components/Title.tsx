import React from "react";
import { TitleInput } from "../styles/TitleInput";

export type TitleProps = {
	noteTitle: string;
	active: boolean;
	onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Title = ({ noteTitle, active, onChangeHandler }: TitleProps) => {
	return (
		<TitleInput
			display={active || noteTitle ? true : false}
			name="title"
			active={active}
			onChange={onChangeHandler}
			placeholder={noteTitle.trim() !== "" ? "" : "Title"}
			defaultValue={noteTitle.trim() !== "" ? noteTitle : ""}
			className="ignore"
		/>
	);
};

export default Title;
