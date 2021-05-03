import {
    addnewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controller/crmController';

const routes = (app) => {
    app.route('/contact')
    //GET all contacts
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        //POST endpoint
        .post(addnewContact);

    app.route('/contact/:contactID')
        //GET a specific contact
        .get(getContactWithID)
        //UPDATE contact
        .put(updateContact)
        //DELETE contact
        .delete(deleteContact);
}

export default routes;
