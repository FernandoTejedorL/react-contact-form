import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	StyledConsentBox,
	StyledEachInputContainer,
	StyledEachQuery,
	StyledForm,
	StyledFormContainer,
	StyledHeader,
	StyledInput,
	StyledLabel,
	StyledNameandSurname,
	StyledQueryContainer,
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
	console.log(errors); // comprobar que está vacío
	const selectedRadio = watch('query');
	const [successForm, setSuccessForm] = useState(false);

	return (
		<StyledFormContainer>
			{successForm && (
				<div>
					<h2>Message Sent!</h2>
					<p>Thanks for completing the form. We’ll be in touch soon!</p>
				</div>
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
							className={errors.firstName ? 'input-error' : ''}
						/>
						<p>{errors.firstName?.message}</p>
					</StyledEachInputContainer>
					<StyledEachInputContainer>
						<StyledLabel>Last Name *</StyledLabel>
						<StyledInput
							{...register('lastName', { required: 'This field is required' })}
							type='text'
							className={errors.lastName ? 'input-error' : ''}
						/>
						<p>{errors.lastName?.message}</p>
					</StyledEachInputContainer>
				</StyledNameandSurname>
				<StyledLabel>Email Address *</StyledLabel>
				<StyledInput
					{...register('email', {
						required: 'Please enter a valid email address'
					})}
					type='email'
					className={errors.email ? 'input-error' : ''}
				/>
				<p>{errors.email?.message}</p>
				<StyledEachInputContainer>
					<StyledLabel>Query type *</StyledLabel>
					<StyledQueryContainer>
						<StyledEachQuery
							className={selectedRadio === 'general' ? 'selected' : ''}
						>
							<input
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
							<input
								type='radio'
								{...register('query', {
									required: 'Please select a query type'
								})}
								id='support'
								value={'support'}
							/>
							<span>Support Request</span>
							<p>{errors.query?.message}</p>
						</StyledEachQuery>
					</StyledQueryContainer>
				</StyledEachInputContainer>
				<StyledTextcontainer>
					<StyledLabel>Message</StyledLabel>
					<StyledTextArea
						{...register('text', { required: 'This field is required' })}
						id=''
						className={errors.text ? 'input-error' : ''}
					></StyledTextArea>
					<p>{errors.text?.message}</p>
				</StyledTextcontainer>
				<StyledConsentBox>
					<input
						type='checkbox'
						{...register('consent', {
							required: 'To submit this form, please consent to being contacted'
						})}
						id='consent'
						className={errors.consent ? 'input-error' : ''}
					/>
					<span>I consent to being contacted by the team *</span>
					<p>{errors.consent?.message}</p>
				</StyledConsentBox>
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
