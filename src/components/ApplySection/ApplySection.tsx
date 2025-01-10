"use client";

import applyStyles from './ApplySection.module.css';
import { Input } from '../Input/Input';
import { ChangeEvent, FormEvent, useRef, useState, KeyboardEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../Button/Button';
import buttonStyles from '../Button/Button.module.css';

interface ApplySectionProps {
    className?: string;
}

interface FormData {
    email: string | null;
    phoneNumber: string | null;
    uploadResume: File | null;
    buttonText: string;
}

interface Errors {
    email: string;
    phoneNumber: string;
    uploadResume: string;
    buttonText: string;
}



export const ApplySection: React.FC<ApplySectionProps> = ({className}) => {

    const MAX_EMAIL_LENGTH = 70;
    const MAX_PHONE_LENGTH = 15;

    const [formData, setFormData] = useState<FormData>({
        email: '',
        phoneNumber:'',
        uploadResume: null,
        buttonText: 'Apply'
    });

    const [errors, setErrors] = useState<Errors>({
        email: '',
        phoneNumber: '',
        uploadResume: '',
        buttonText: '',
    });

    const [focused, setFocused] = useState(false);

    const form = useRef(null);



    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Destructure the event object
        const {name, value, type} = event.target;
        // console.log('name:', name);
        // console.log('value:', value);
        // console.log('type:', type);
        
        
        // If the input type is checkbox, then set the checked value
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: event.target.checked
            });
            return;
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    // validate form for empty fields
    const validate = () => {
        const newErrors = {
            email: '',
            phoneNumber: '',
            uploadResume: '',
            buttonText: ''
        };

        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required';
        }

        if (!formData.uploadResume) {
            newErrors.uploadResume = 'Resume is required';
        }

        setErrors(newErrors);

        // console.log('New Errors:', newErrors);

        // return Object.keys(newErrors).length === 0;

        // Check if there are any errors
        const isValid = Object.values(newErrors).every(error => error === '');
        console.log('Form is valid:', isValid);

        return isValid;
    }

    // handling file change and checking if its pdf or word and not bigger then 50 kb
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            // checking if its pdf or word
            if (isFileTypeAllowed(file)) {
                setFormData({
                    ...formData,
                    uploadResume: file
                });
            } else {
                setErrors({...errors, uploadResume: 'The file is not \'.pdf\' or \'.word\' format or bigger then 50 KB.'});
            }
        }
    }

    // checking if file is pdf or word and not bigger then 50 kb
    const isFileTypeAllowed = (file: File | null) => {
        if (!file) {
            return false;
        }
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 50 * 1024; // 50 kbs 
        // 50 kb max size
        return (allowedTypes.includes(file.type) && file.size <= maxSize);
    }

    // handling form submit
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const apiKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY;
        const currentForm = form.current;

        // Debug logs
        console.log('Form Data:', formData);
        console.log('Validation Result:', validate());
        console.log('Environment Variables:', {
            serviceId,
            templateId,
            apiKeyExists: !!apiKey
        });
        console.log('Form Reference:', currentForm);

        // Detailed validation
        if (!validate()) {
            console.error('Form validation failed');
            return;
        }

        if (!serviceId || !templateId || !apiKey) {
            console.error('Missing EmailJS configuration');
            return;
        }

        if (!currentForm) {
            console.error('Form reference is null');
            return;
        }

        // Call the API to submit the form
        setFormData({...formData, buttonText: 'Applying...'});

        // Send the form data to the emailjs service
        emailjs.sendForm(serviceId, templateId, currentForm, apiKey)
        .then((result) => {
            setFormData({...formData, buttonText: 'Sent !'});
            //setFocused(false);
            event.target.reset();
            setTimeout(() => {
                setFormData({...formData, buttonText: 'Apply'});
            }, 3000); // Reset the button text after 3 seconds
        }, (error) => {
            console.log(error.text);
            setFormData({...formData, buttonText: 'Failed...'});
            //setFocused(false);
            event.target.reset();
            setTimeout(() => {
                setFormData({...formData, buttonText: 'Apply'});
            }, 3000); // Reset the button text after 3 seconds
        });
    }

    // setting focus to clear data after sending info
    const handleFocus = () => {
        setFocused(true);
    }

        
    // checking if key is allowed and prevent typing anything else
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        const { key } = event;

        const allowedKeys = ['+', '(', ')','0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    
        //Allow only numbers, backspace, delete, left arrow, right arrow, and tab
        if (!allowedKeys.includes(key)) { 
            event.preventDefault();
        }
    };

    return (
        <section className={`${className} ${applyStyles.applySection}`}>
            <div className={applyStyles.wrapper}>

                <div className={applyStyles.leftArea}>
                            <h2 className={applyStyles.title}>Apply for the job</h2>
                            <p className={applyStyles.description}>Please fill out the form below to apply for the job.</p>
                </div>
                
                <form ref={form} 
                      onSubmit={handleSubmit}
                      encType='multipart/form-data'
                      className={applyStyles.rightArea}
                      method='post'>

                    <Input 
                        type='text'
                        label='Phone number'
                        placeholder='Enter your phone number'
                        onChange={(event) => handleChange(event)}
                        onFocus={handleFocus}
                        error={errors.phoneNumber}
                        name='phoneNumber'
                        id='phoneNumber'
                        onKeyDown={handleKeyDown}
                        maxLength={MAX_PHONE_LENGTH}/>
                
                
                    <Input 
                        type='email'
                        label='Email'
                        placeholder='Enter your email'
                        onChange={(event) => handleChange(event)}
                        error={errors.email}
                        name='email'
                        id='email'
                        maxLength={MAX_EMAIL_LENGTH}/>
                

                
                    <Input 
                        type='file'
                        label='Resume'
                        error={errors.uploadResume}
                        placeholder='Upload your resume'
                        onChange={(event) => handleFileChange(event)}
                        onFocus={handleFocus}
                        id='uploadResume'
                        name='uploadResume'/> 
                 

                    <div>
                        <Button type='submit' title={formData.buttonText} className={`${buttonStyles.mainButton} ${buttonStyles.mainButtonGreen}`}/>
                    </div>
                    
                

                    
                </form>
            </div>
        </section>
    )
}