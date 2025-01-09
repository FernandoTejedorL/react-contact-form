import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();
	console.log(errors);
	const selectedRadio = watch('query');
	const [successForm, setSuccessForm] = useState(false);

	return (
		<div>
			{successForm && (
				<div>
					<h2>Message Sent!</h2>
					<p>Thanks for completing the form. We’ll be in touch soon!</p>
				</div>
			)}
			<h1>Contact Us</h1>
			<form
				autoComplete='off'
				onSubmit={handleSubmit(data => onSubmit(data, setSuccessForm))}
				action=''
			>
				<div>
					<span>First Name *</span>
					<input
						{...register('firstName', { required: 'This field is required' })}
						type='text'
						placeholder='first name'
						className={errors.firstName ? 'input-error' : ''}
					/>
					<p>{errors.firstName?.message}</p>
					<span>Last Name *</span>
					<input
						{...register('lastName', { required: 'This field is required' })}
						type='text'
						placeholder='last name'
						className={errors.lastName ? 'input-error' : ''}
					/>
					<p>{errors.lastName?.message}</p>
				</div>
				<span>Email Address *</span>
				<input
					{...register('email', {
						required: 'Please enter a valid email address'
					})}
					type='mail'
					placeholder='email'
					className={errors.email ? 'input-error' : ''}
				/>
				<p>{errors.email?.message}</p>
				<div>
					<span>Query type *</span>
					<div>
						<input
							type='radio'
							{...register('query', { required: true })}
							id='general'
							value={'general'}
						/>
						<span className={selectedRadio === 'general' ? 'selected' : ''}>
							General Enquiry
						</span>

						<input
							type='radio'
							{...register('query', { required: 'Please select a query type' })}
							id='support'
							value={'support'}
						/>
						<span className={selectedRadio === 'support' ? 'selected' : ''}>
							Support Request
						</span>
						<p>{errors.query?.message}</p>
					</div>
				</div>
				<div>
					<span>Message</span>
					<textarea
						{...register('text', { required: 'This field is required' })}
						id=''
						className={errors.text ? 'input-error' : ''}
					></textarea>
					<p>{errors.text?.message}</p>
				</div>
				<div>
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
				</div>
				<button type='submit'>submit</button>
			</form>
		</div>
	);
};

const onSubmit = (data, setSuccessForm) => {
	console.log(data);
	setSuccessForm(true);
};
export default Form;
