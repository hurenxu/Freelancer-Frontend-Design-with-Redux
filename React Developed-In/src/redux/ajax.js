import {applicationData, accountData} from './database.js'

const delay = 0;
export const addAccount = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let newAccount = {
                username: username,
                password: password,
                applications: [],
                suggestions: applicationData,
            };

            accountData.push(newAccount);
            resolve(Object.assign({}, newAccount));
        }, delay);
    });
};

export const loadAccount = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let account = null;
            for(let i = 0; i < accountData.length; i++){
                if(accountData[i].username === username){
                    account = accountData[i]
                }
            }

            resolve(account === null ? null : Object.assign({}, account));
        }, delay);
    });
};

export const loadApplications = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let application = null;
            for(let i = 0; i < applicationData.length; i++){
                if(applicationData[i].id === id){
                    application = applicationData[i];
                }
            }

            resolve(application === null ? null : Object.assign({}, application));
        }, delay);
    });
}
