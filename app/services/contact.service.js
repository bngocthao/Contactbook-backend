const { ObjectID } = require("mongodb");

class ContactService {
    constructor(client) {
        this.Contact = client.db().collection("contacts");
        // Định nghĩa các phương thức truy xuất csdl sử dụng mongodb api
    }

    // Định nghĩa phương thức truy xuất csdl sử dụng mongodb api
    extractContactData(payload) {
        const contact = {
            name: payload.name,
            email: payload.email,
            address: payload.address,
            phone: payload.phone,
            favorite: payload.favorite,
        };
        // remove undefined fields
        Objects.keys(contact).forEach(
            (key) => contact[key] === undefined && delete contact[key]
        );
        return contact;
    }

    async create(payload) {
        const contact = this.extractContactData(payload);
        const result = await this.contact.findOneAndUpdate(
            contact, { $set: { favorite: contact.favorite === true } }

        )}
    }




module.exports = ContactService;