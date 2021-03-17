import * as React from "react";
import PropTypes from "prop-types";
import {
	IconSearch,
	IconFilter,
	IconLocation,
	IconCheck,
} from "components/Icon";
import Field from "components/Field";
import { Button, Modal, ModalContent, ModalOpenBtn } from "components/lib";
import { MobileView, MediumView, ButtonGroup, Fulltime, Popup } from "./styles";

const JobType = React.memo(({ fulltime, children, onClick }) => (
	<Fulltime onClick={onClick}>
		<span className={`${fulltime === true ? "checkbox checked" : "checkbox"}`}>
			<IconCheck />
		</span>
		{children || (
			<strong>
				Fulltime <span className="only-text">only</span>
			</strong>
		)}
	</Fulltime>
));

const JobFilter = ({ children, onChange, ...filter }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit}>
			{/* search for mobile view */}
			<MobileView>
				<Field
					name="title--mobile"
					value={filter.title}
					onChange={(e) => onChange({ title: e.target.value })}
					placeholder="Filter by title..."
					className="job-title"
				/>
				<ButtonGroup>
					{/* popup for mobile version */}
					<Modal>
						<ModalOpenBtn>
							<span className="button-filter">
								<IconFilter />
							</span>
						</ModalOpenBtn>
						<ModalContent aria-label="job-filter">
							<Popup>
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
									fulltime={filter.fulltime}
									onClick={() => onChange({ fulltime: !filter.fulltime })}
									className="fulltime--mobile"
								>
									<strong>Fulltime only</strong>
								</JobType>
								<Button onClick={handleSubmit}>search</Button>
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
					value={filter.title}
					onChange={(e) => onChange({ title: e.target.value })}
					placeholder="Filter by title..."
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
						fulltime={filter.fulltime}
						onClick={() => onChange({ fulltime: !filter.fulltime })}
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
	onChange: PropTypes.func.isRequired,
	title: PropTypes.string,
	location: PropTypes.string,
	type: PropTypes.string, //fulltime, parttime
};

export default React.memo(JobFilter);
