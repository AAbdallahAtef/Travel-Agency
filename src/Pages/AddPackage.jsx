import React, { useCallback, useContext, useState } from 'react';
import {packageContext} from '../context/packageContextProvider'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AddPackage = () => {
    const {packages,addPackage} = useContext(packageContext);
    const navigate  = useNavigate()
    const [t, i18n] = useTranslation();
   
    const [formData, setFormData] = useState({
        destination_name: '',
        name: '',
        description: '',
        price: '',
        duration_days: '',
        included_activities: [],
        image_url: ''
    });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value,});
    },[formData]);

    const handleActivitiesChange = useCallback((e) => {
        const arrOfAct = e.target.value.split(',')
        setFormData({...formData,included_activities: arrOfAct,});
    },[formData]);

    const handleSubmit = useCallback(async(e) => {
        e.preventDefault();
        //  await setPackages([...packages, {...formData,id:`${packages.length+1}` ,price: +formData.price,duration_days: +formData.duration_days}]);
         await addPackage({...formData,id:`${packages.length+1}` ,price: +formData.price,duration_days: +formData.duration_days});
        navigate('/home')
    },[navigate,addPackage,formData,packages.length])
    return (
        <>
            <div className="container mt-5" dir={`${i18n.language}`==='en'?"ltr":"rtl"} >
                <div className=' bg-dark rounded shadow-lg p-4 mb-5 bg-body-tertiary' style={{color:'#000000', marginTop:"100px"}}>
                {/* <div className='py-2 mb-2 bg-dark rounded' style={{color:'#D2D2D2',backgroundColor:"#363530"}}> */}
                    <h2 className='text-center mb-3' style={{color:"#589abb"}}>{t("Add A New Package")}</h2>
                    <form onSubmit={handleSubmit} className='row  justify-content-center gap-3 '>
                        <div className="col-5">
                            <label htmlFor="destination_name" className="form-label">{t("Destination Name ")}: </label>
                            <input type="text" className="form-control" id="destination_name" name="destination_name"
                            value = {formData.destination_name} onChange={handleChange}/>
                        </div>
                        <div className="col-5">
                            <label htmlFor="name" className="form-label">{t("Tour Name")}: </label>
                            <input type="text" className="form-control" id="name" name="name" value = {formData.name} onChange={handleChange}/>
                        </div>

                        <div className="col-5">
                            <label htmlFor="price" className="form-label">{t("Price")} : </label>
                            <input type="number" className="form-control" id="price" name="price" value = {formData.price} onChange={handleChange}/>
                        </div>
                        <div className="col-5">
                            <label htmlFor="duration_days" className="form-label">{t("Duration (in days)")} :</label>
                            <input type="number" className="form-control" id="duration_days" name="duration_days"
                            value = {formData.duration_days} onChange={handleChange}/>
                        </div>
                        <div className="col-5">
                            <label htmlFor="included_activities" className="form-label">{t("Included Activities (comma-separated)")} : </label>
                            <input type="text" className="form-control" id="included_activities" name="included_activities"
                            value = {formData.included_activities} onChange={handleActivitiesChange}/>
                        </div>
                        <div className="col-5">
                            <label htmlFor="image_url" className="form-label">{t("Image URL") }: </label>
                            <input type="text" className="form-control" id="image_url" name="image_url"  onChange={handleChange}/>
                        </div>
                        <div className="col-10">
                            <label htmlFor="description" className="form-label">{t("Description")} : </label>
                            <textarea className="form-control" id="description" name="description" rows="3"
                            value = {formData.description} onChange={handleChange}></textarea>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className="btn text-white col-2" style={{backgroundColor:"#589abb",position:"relative"}}>{t("Add")}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddPackage;