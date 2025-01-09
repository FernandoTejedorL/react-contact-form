import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${COLORS.white};
	border-radius: 1rem;
	color: ${COLORS.grey900};
	padding: 1.5rem;
	gap: 2rem;
	margin: 2rem 1rem;

	@media screen and (width>=768px) {
		width: 690px;
		margin-top: 8rem;
	}

	@media screen and (width>=1024px) {
		width: 46rem;
	}
`;

const StyledHeader = styled.h1`
	font-size: ${FONT_SIZE.heading};
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const StyledNameandSurname = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (width>=768px) {
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		gap: 1rem;
	}
`;

const StyledEachInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const StyledLabel = styled.span`
	font-size: ${FONT_SIZE.bodyS};
	margin-top: 1rem;
	margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
	width: 100%;
	height: 3.1875rem;
	padding: 0.75rem 1.5rem;
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.grey500};
	font-size: ${FONT_SIZE.bodyM};

	@media (hover: hover) {
		&:hover {
			border: 0.0625rem solid ${COLORS.green600};
		}
	}
`;

const StyledQueryContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media screen and (width>=768px) {
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		gap: 1rem;
	}
`;

const StyledEachQuery = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	width: 100%;
	height: 3.1875rem;
	padding: 0.8125rem 1.5rem;
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.grey500};

	@media (hover: hover) {
		&:hover {
			border: 0.0625rem solid ${COLORS.green600};
		}
	}
`;

const StyledTextcontainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledTextArea = styled.textarea`
	min-height: 15rem;
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.green600};

	@media screen and (width>=768px) {
		min-height: 8.25rem;
	}
`;

const StyledConsentBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledSubmitButton = styled.button`
	height: 3.6875rem;
	color: ${COLORS.white};
	background-color: ${COLORS.green600};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.bodyM};
	border: none;
	border-radius: 0.5rem;
	margin-top: 2.5rem;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.grey900};
		}
	}
`;

export {
	StyledFormContainer,
	StyledHeader,
	StyledForm,
	StyledNameandSurname,
	StyledEachInputContainer,
	StyledLabel,
	StyledInput,
	StyledQueryContainer,
	StyledEachQuery,
	StyledTextcontainer,
	StyledTextArea,
	StyledConsentBox,
	StyledSubmitButton
};
