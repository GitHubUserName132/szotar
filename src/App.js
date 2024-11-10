import "./App.css";
import words from "./words";
import { useState } from "react";

function App() {
	let [search, setSearch] = useState("");
	return (
		<>
			<form>
				<input
					type="search"
					className="bg-gray-700 block mr-auto ml-auto p-2 w-4/5 mt-4 mb-4"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>
			{words
				.filter((e) =>
					search.toLowerCase() === ""
						? e
						: e.term_en.includes(search) || e.term_hu.includes(search)
				)
				.map((data) => {
					return (
						<div id="datas" className="flex ">
							<div className="rounded border-black border-2 p-4 w-full enSec">
								<h1 id="termEn">{data.term_en}</h1>
								<p id="descEn">{data.description_en}</p>
							</div>
							<div className="rounded border-black border-2 p-4 w-full huSec">
								<h1 id="termEn">{data.term_hu}</h1>
								<p id="descHu">{data.description_hu}</p>
							</div>
						</div>
					);
				})}
		</>
	);
}

export default App;
