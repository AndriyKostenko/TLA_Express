"use client";

import applyStyles from './ApplySection.module.css';
import { Input } from '../Input/Input';
import { ChangeEvent, FormEvent, useRef, useState, KeyboardEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../Button/Button';
import buttonStyles from '../Button/Button.module.css';
import Image from 'next/image';
import appplyImage1 from '../../../public/111happy-costumer-received-a-package-- (1).png';

interface ApplySectionProps {
    className?: string;
}

interface FormData {
    email: string | null;
    phoneNumber: string | null;
    uploadCV: File | null;
    buttonText: string;
}

interface Errors {
    email: string;
    phoneNumber: string;
    uploadCV: string;
    buttonText: string;
}



export const ApplySection: React.FC<ApplySectionProps> = ({className}) => {

    const MAX_EMAIL_LENGTH = 70;
    const MAX_PHONE_LENGTH = 15;

    const [formData, setFormData] = useState<FormData>({
        email: '',
        phoneNumber:'',
        uploadCV: null,
        buttonText: 'Apply'
    });

    const [errors, setErrors] = useState<Errors>({
        email: '',
        phoneNumber: '',
        uploadCV: '',
        buttonText: ''
    });

    const [focused, setFocused] = useState(false);

    const form = useRef(null);



    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Destructure the event object
        const {name, value, type} = event.target;
        
        
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
        // Create new errors object
        const newErrors = {
            email: '',
            phoneNumber: '',
            uploadCV: '',
            buttonText: ''
        };

        const ERROR_MESSAGES = {
            EMAIL_REQUIRED: 'Email is required',
            PHONE_NUMBER_REQUIRED: 'Phone number is required',
            EMAIL_INVALID: 'Email is invalid',
            FILE_INVALID: (size: string) => `The file is not .pdf/.word format or bigger than 50 KB. File size: ${size} KB`,
            FILE_REQUIRED: 'Resume is required'

        };
    
        // Collect all validation errors
        if (!formData.email) {
            newErrors.email = ERROR_MESSAGES.EMAIL_REQUIRED;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = ERROR_MESSAGES.EMAIL_INVALID;
        }
    
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = ERROR_MESSAGES.PHONE_NUMBER_REQUIRED;
        }
    
        if (!formData.uploadCV) {
            newErrors.uploadCV = ERROR_MESSAGES.FILE_REQUIRED;
        } else if (!isFileTypeAllowed(formData.uploadCV)) {
            newErrors.uploadCV = ERROR_MESSAGES.FILE_INVALID(fileSize(formData.uploadCV));
        }
    
        // Set all errors at once
        setErrors(newErrors);
    
        return Object.values(newErrors).every(error => error === '');
    };

    // handling file change and checking if its pdf or word and not bigger then 50 kb
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            // checking if its pdf or word
            if (isFileTypeAllowed(file)) {
                setFormData({
                    ...formData,
                    uploadCV: file
                });

                // Clear the error message
                setErrors({...errors, uploadCV: ''});
            } else {
                setErrors({...errors, uploadCV: `The file is not .pdf/.word format or bigger than 50 KB. File size: ${fileSize(file)} KB`});
            }
        }
    }

    // checking if file is pdf or word and not bigger then 50 kb
    const isFileTypeAllowed = (file: File | null) => {
        const MAX_FILE_SIZE = 50 * 1024; // 50 kbs
        console.log('File size:', file?.size);
        
        if (!file) {
            return false;
        }
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        
        return (allowedTypes.includes(file.type) && file.size <= MAX_FILE_SIZE);
    }

    const fileSize = (file: File) => {
        const size = file.size / 1024;
        return size.toFixed(2);
    }

    // handling form submit
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const apiKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY;
        const currentForm = form.current;

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
        .then(() => {
            setFormData({...formData, buttonText: 'Sent !'});
            //setFocused(false);
            event.target.reset();
            setTimeout(() => {
                setFormData({...formData, buttonText: 'Apply'});
            }, 3000); // Reset the button text after 3 seconds
        }, (error) => {
            console.log(error.text);
            setFormData({...formData, buttonText: 'Failed !'});
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
            

                <div className={applyStyles.leftArea}>
                    
                    <div className={applyStyles.applyImage}>
                        <Image src={appplyImage1} alt="Apply Image 1" fill style={{objectFit: 'contain'}}/>
                    </div>
                    
                </div>
                
                <form ref={form} 
                      onSubmit={handleSubmit}
                      encType="multipart/form-data"
                      className={applyStyles.rightArea}
                      method="post"
                      noValidate>

                    <h2 className={applyStyles.title}>Apply for the job</h2>
                    <p className={applyStyles.description}>Please fill out the form below to apply for the job.</p>

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
                        type="file"
                        label='Resume'
                        error={errors.uploadCV}
                        placeholder='Upload your resume'
                        onChange={(event) => handleFileChange(event)}
                        onFocus={handleFocus}
                        id="uploadCV"
                        name="uploadCV"
                        accept=".pdf,.docx,.doc"/>

                 
                    <div>
                        <Button type='submit' title={formData.buttonText} className={`${buttonStyles.mainButton} ${buttonStyles.mainButtonGreen}`}/>
                    </div>
                </form>
        </section>
    )
}