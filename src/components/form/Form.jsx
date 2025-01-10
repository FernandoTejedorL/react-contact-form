import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	StyledCheckbox,
	StyledConsentBox,
	StyledEachInputContainer,
	StyledEachQuery,
	StyledErrorText,
	StyledForm,
	StyledFormContainer,
	StyledHeader,
	StyledInput,
	StyledLabel,
	StyledMessageSent,
	StyledNameandSurname,
	StyledQueryContainer,
	StyledRadio,
	StyledSubmitButton,
	StyledTextArea,
	StyledTextcontainer
} from './form.styles';

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm();
	const selectedRadio = watch('query');
	const [successForm, setSuccessForm] = useState(false);

	return (
		<StyledFormContainer>
			{successForm && (
				<StyledMessageSent>
					<h2>Message Sent!</h2>
					<p>Thanks for completing the form. We’ll be in touch soon!</p>
				</StyledMessageSent>
			)}
			<StyledHeader>Contact Us</StyledHeader>
			<StyledForm
				autoComplete='off'
				onSubmit={handleSubmit(data => onSubmit(data, setSuccessForm, reset))}
				action=''
			>
				<StyledNameandSurname>
					<StyledEachInputContainer>
						<StyledLabel>First Name *</StyledLabel>
						<StyledInput
							{...register('firstName', { required: 'This field is required' })}
							type='text'
							$isError={errors.firstName}
						/>
						<StyledErrorText>{errors.firstName?.message}</StyledErrorText>
					</StyledEachInputContainer>
					<StyledEachInputContainer>
						<StyledLabel>Last Name *</StyledLabel>
						<StyledInput
							{...register('lastName', { required: 'This field is required' })}
							type='text'
							$isError={errors.lastName}
						/>
						<StyledErrorText>{errors.lastName?.message}</StyledErrorText>
					</StyledEachInputContainer>
				</StyledNameandSurname>
				<StyledLabel>Email Address *</StyledLabel>
				<StyledInput
					{...register('email', {
						required: 'Please enter a valid email address'
					})}
					type='email'
					$isError={errors.email}
				/>
				<StyledErrorText>{errors.email?.message}</StyledErrorText>
				<StyledEachInputContainer>
					<StyledLabel>Query type *</StyledLabel>
					<StyledQueryContainer>
						<StyledEachQuery
							className={selectedRadio === 'general' ? 'selected' : ''}
							$selected={selectedRadio}
						>
							<StyledRadio
								type='radio'
								{...register('query', { required: true })}
								id='general'
								value={'general'}
							/>
							<span>General Enquiry</span>
						</StyledEachQuery>
						<StyledEachQuery
							className={selectedRadio === 'support' ? 'selected' : ''}
						>
							<StyledRadio
								type='radio'
								{...register('query', {
									required: 'Please select a query type'
								})}
								id='support'
								value={'support'}
							/>
							<span>Support Request</span>
						</StyledEachQuery>
					</StyledQueryContainer>
					<StyledErrorText>{errors.query?.message}</StyledErrorText>
				</StyledEachInputContainer>
				<StyledTextcontainer>
					<StyledLabel>Message</StyledLabel>
					<StyledTextArea
						{...register('text', { required: 'This field is required' })}
						id=''
						$isError={errors.text}
					></StyledTextArea>
					<StyledErrorText>{errors.text?.message}</StyledErrorText>
				</StyledTextcontainer>
				<StyledConsentBox>
					<StyledCheckbox
						type='checkbox'
						{...register('consent', {
							required: 'To submit this form, please consent to being contacted'
						})}
						id='consent'
					/>
					<span>I consent to being contacted by the team *</span>
				</StyledConsentBox>
				<StyledErrorText>{errors.consent?.message}</StyledErrorText>
				<StyledSubmitButton type='submit'>submit</StyledSubmitButton>
			</StyledForm>
		</StyledFormContainer>
	);
};

const onSubmit = (data, setSuccessForm, reset) => {
	console.log(data);
	setSuccessForm(true);
	reset();
};
export default Form;
