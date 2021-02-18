import * as React from "react";
import {
	searchByCountryName,
	searchByRegionName,
	useCountrySearch,
} from "screens/home/context";
import regionList from "./region-list";
import {
	Container,
	CountryFilter,
	DropdownArrow,
	DropdownButton,
	DropdownInput,
	DropdownList,
	DropdownOption,
	DropdownPopover,
	Input,
	Label,
	RegionFilter,
	SearchButton,
	SearchIcon,
} from "./styles";

function SearchCountryByRegion() {
	const { search, dispatch } = useCountrySearch();
	const handleChange = (region) => searchByRegionName(dispatch, region);
	return (
		<RegionFilter>
			<DropdownInput
				aria-labelledby={"region"}
				value={search.region}
				onChange={(region) => handleChange(region)}
			>
				<DropdownButton arrow={<DropdownArrow />} />
				<DropdownPopover>
					<DropdownList>
						<DropdownOption value="all" key="blank">
							Filter by region
						</DropdownOption>
						{regionList.map((region) => (
							<DropdownOption value={region} key={region}>
								{region}
							</DropdownOption>
						))}
					</DropdownList>
				</DropdownPopover>
			</DropdownInput>
		</RegionFilter>
	);
}

function SearchCountryByName() {
	const { search, dispatch } = useCountrySearch();
	const [country, setCountry] = React.useState(search.country);
	const handleChange = (e) => {
		const value = e.target.value;
		setCountry(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		searchByCountryName(dispatch, country.trim());
	};
	// reset country name as empty after filtering by region name
	React.useEffect(() => {
		setCountry(search.country);
	}, [search.country]);
	return (
		<CountryFilter as="form" onSubmit={handleSubmit}>
			<Label htmlFor="country">
				<Input
					as="input"
					value={country}
					name="country"
					id="country"
					onChange={handleChange}
					placeholder="search for a country..."
				/>
				<SearchButton type="submit">
					<SearchIcon />
				</SearchButton>
			</Label>
		</CountryFilter>
	);
}

export default function CountrySearcher() {
	return (
		<Container>
			<SearchCountryByName />
			<SearchCountryByRegion />
		</Container>
	);
}
