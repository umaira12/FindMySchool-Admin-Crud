import firebase from '../helpers/db';
import Institute from '../models/institute';


const firestore = firebase.firestore();

export const getInstitutes = async () => {
    try {
        const response = await firestore.collection('institutes');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const institute = new Institute(
                doc.id,
                doc.data().name,
                doc.data().contactnumber,
                doc.data().address,
            );

            array.push(institute);
        });
        return array;
    } catch (error) {
        throw error;
    }
}

export const addInstitute = async (institute) => {
    try {
        await firestore.collection('institutes').doc().set(institute);
    } catch (error) {
        throw error;
    }
}

export const getInstitute= async (id) => {
    try {
        const institute = await firestore.collection('institutes').doc(id);
        const data = await institute.get();
        return data.data();
    } catch (error) {
        throw error;
    }
}

export const updateInstitute = async (id, data) => {
    try {
        const institute = await firestore.collection('institutes').doc(id);
        await institute.update(data)
    } catch (error) {
        throw error;
    }
}

export const deleteInstitute = async (id) => {
    try {
        await firestore.collection('institutes').doc(id).delete();
    } catch (error) {
        throw error;
    }
}






// import firebase from '../helpers/db';
// import Customer from '../models/customer';


// const firestore = firebase.firestore();

// export const getCustomers = async () => {
//     try {
//         const response = await firestore.collection('customers');
//         const data = await response.get();
//         let array = [];
//         data.forEach(doc => {
//             const customer = new Customer(
//                 doc.id,
//                 doc.data().firstname,
//                 doc.data().lastname,
//                 doc.data().phonenumber,
//                 doc.data().maritalstatus,
//                 doc.data().gender,
//                 doc.data().postcode,
//                 doc.data().city
//             );

//             array.push(customer);
//         });
//         return array;
//     } catch (error) {
//         throw error;
//     }
// }

// export const addCustomer = async (customer) => {
//     try {
//         await firestore.collection('customers').doc().set(customer);
//     } catch (error) {
//         throw error;
//     }
// }

// export const getCustomer = async (id) => {
//     try {
//         const customer = await firestore.collection('customers').doc(id);
//         const data = await customer.get();
//         return data.data();
//     } catch (error) {
//         throw error;
//     }
// }

// export const updateCustomer = async (id, data) => {
//     try {
//         const customer = await firestore.collection('customers').doc(id);
//         await customer.update(data)
//     } catch (error) {
//         throw error;
//     }
// }

// export const deleteCustomer = async (id) => {
//     try {
//         await firestore.collection('customers').doc(id).delete();
//     } catch (error) {
//         throw error;
//     }
// }