import * as React from "react";
import PropTypes from "prop-types";
import {
	IconSearch,
	IconFilter,
	IconLocation,
	IconCheck,
} from "components/Icon";
import Field from "components/Field";
import { useTheme, THEME_MODE } from "context/theme.context";
import { Button, Modal, ModalContent, ModalOpenBtn } from "components/lib";
import { MobileView, MediumView, ButtonGroup, Fulltime, Popup } from "./styles";

const { light } = THEME_MODE;
const JobType = React.memo(({ fulltime, children, onClick }) => {
	const [mode] = useTheme();
	const bgColor = mode === light ? "#f2f2f2" : "#313743";
	return (
		<Fulltime onClick={onClick}>
			<span
				className={`${fulltime === true ? "checkbox checked" : "checkbox"}`}
				style={{ backgroundColor: bgColor }}
			>
				<IconCheck />
			</span>
			{children || (
				<strong>
					Fulltime <span className="only-text">only</span>
				</strong>
			)}
		</Fulltime>
	);
});

const JobFilter = ({ children, onChange, onSubmit, ...filter }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit();
	};
	return (
		<form onSubmit={handleSubmit}>
			{/* search for mobile view */}
			<MobileView>
				<Field
					name="title--mobile"
					value={filter.description}
					onChange={(e) => onChange({ description: e.target.value })}
					placeholder="Filter by description..."
					className="job-title"
				/>
				<ButtonGroup>
					{/* popup for mobile version */}
					<Modal>
						<ModalOpenBtn>
							<span className="button-filter" aria-label="filter">
								<IconFilter />
							</span>
						</ModalOpenBtn>
						<ModalContent aria-label="filter-dialog">
							<Popup>
								<form onSubmit={handleSubmit}>
									<Field
										name="location--mobile"
										value={filter.location}
										onChange={(e) => onChange({ location: e.target.value })}
										placeholder="Filter by location..."
										className="job-location"
									>
										<IconLocation />
									</Field>
									<p className="line"></p>
									<JobType
										fulltime={filter.full_time}
										onClick={() => onChange({ full_time: !filter.full_time })}
										className="fulltime--mobile"
									>
										<strong>Fulltime only</strong>
									</JobType>
									<Button type="submit">search</Button>
								</form>
							</Popup>
						</ModalContent>
					</Modal>
					<Button type="submit" className="button-search">
						<IconSearch />
						<span>search</span>
					</Button>
				</ButtonGroup>
			</MobileView>
			{/* search field for tablet and above */}
			<MediumView>
				<Field
					name="title--medium"
					value={filter.description}
					onChange={(e) => onChange({ description: e.target.value })}
					placeholder="Filter by description..."
				>
					<IconSearch />
				</Field>
				<Field
					name="location"
					value={filter.location}
					onChange={(e) => onChange({ location: e.target.value })}
					placeholder="Filter by location..."
				>
					<IconLocation />
				</Field>
				<ButtonGroup className="btn-group">
					<JobType
						fulltime={filter.full_time}
						onClick={() => onChange({ full_time: !filter.full_time })}
					/>
					<Button type="submit" className="button-search">
						<span>search</span>
					</Button>
				</ButtonGroup>
			</MediumView>
		</form>
	);
};
JobFilter.propTypes = {
	title: PropTypes.string,
	location: PropTypes.string,
	full_time: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default React.memo(JobFilter);
