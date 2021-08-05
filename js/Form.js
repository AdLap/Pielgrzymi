import React, {useState} from "react";

export const Form = () => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
        city: '',
        post: '',
        street: '',
        houseNumber: '',
        apartmentNumber: '',
        email: '',
        quantity: '',
        check: false
    });

    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('')

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrMsg('');
        if (validate()) {
            setSuccessMsg('Formularz wysłany');
            /*send mail*/
        } else {
            console.log(errMsg);
        }
    }

    const validate = () => {
        let isValid = true;

        if (form.name.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Imię musi być dłuższe niż dwie litery\n');
        }
        if (form.surname.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nazwisko musi być dłuższe niż dwie litery\n');
        }
        if (form.city.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nazwa miasta musi być dłuższe niż dwie litery\n');
        }
        if (!form.post.match(/^[0-9]{2}-[0-9]{3}$/)) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Kod pocztowy musi się składać z cyfr i mieć format XX-XXX\n');
        }
        if (form.street.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nazwa ulicy musi być dłuższa niż dwie litery\n');
        }
        if (form.houseNumber < 1) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Podaj nr domu\n');
        }
        if (isNaN(form.apartmentNumber)) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Wpisz nr, lub zostaw puste\n');
        }
        if (!form.email.includes('@')) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Adres mailowy musi zawierać "@"\n');
        }
        if (form.quantity < 1) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Minimalna ilość to 1\n');
        }
        if (!form.check) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Musisz wyrazić zgodę');
        }

        return isValid;
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='form__container txt'>
                <div className='form__box'>
                    <label className='form__label'>Imię</label><br/>
                    <input className='form__input' onChange={handleChange} value={form.name} name='name'
                           placeholder='Imię'/>
                </div>
                <div className='form__box'>
                    <label className='form__label'>Nazwisko</label><br/>
                    <input className='form__input' onChange={handleChange} value={form.surname} name='surname'
                           placeholder='Nazwisko'/>
                </div>
                <div className='form__box'>
                    <label className='form__label'>Miasto</label><br/>
                    <input className='form__input' onChange={handleChange} value={form.city} name='city'
                           placeholder='Miasto'/>
                </div>
                <div className='form__box'>
                    <label className='form__label'>Kod pocztowy</label><br/>
                    <input className='form__input' onChange={handleChange} value={form.post} name='post'
                           placeholder='__-___'/>
                </div>
                <div className='form__box'>
                    <label className='form__label'>Miasto</label><br/>
                    <input className='form__input' onChange={handleChange} value={form.street} name='street'
                           placeholder='Ulica'/>
                </div>
                <div className='form__box'>
                    <label className='form__label'>Nr domu</label><br/>
                    <input className='form__input' onChange={handleChange} value={form.houseNumber} name='houseNumber'
                           type='number' placeholder='Nr domu'/>
                </div>
                <div className='form__box'>
                    <label className='form__label'>Nr mieszkania</label><br/>
                    <input className='form__input' onChange={handleChange} value={form.apartmentNumber}
                           name='apartmentNumber'
                           type='number' placeholder='Nr mieszkania'/>
                </div>
                <div className='form__box'>
                    <label className='form__label'>e-mail</label><br/>
                    <input className='form__input' onChange={handleChange} value={form.email} name='email' type='email'
                           placeholder='e-mail'/>
                </div>
                <div className='form__box'>
                    <label className='form__label'>Ilość</label><br/>
                    <input className='form__input' onChange={handleChange} value={form.quantity} name='quantity'
                           type='number'
                           placeholder='Ilość'/>
                </div>
                <div className='form__check'>
                    <input className='form__check' onChange={handleChange} value={form.check} name='check'
                           type='checkbox'/>
                    <label className='check__label'>Zapoznałem się z regulaminem i RODO</label>
                </div>

                <button type='submit' className='form__btn btn' onClick={handleSubmit}>Zamawiam</button>
                <div className='form__msg__err' style={{whiteSpace: 'pre-wrap'}}>{errMsg}</div>
                <div className='form__msg__success'>{successMsg}</div>
            </form>

            <div className='shop__img'>{null}</div>
        </>
    );
}