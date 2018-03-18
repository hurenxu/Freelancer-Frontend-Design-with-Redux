import expect from 'expect';
import reducer from '../redux/reducers';
import * as actions from '../redux/actions';

describe('Change Account Reducer', () => {
    it("test changeAccount", () => {
        const initialState = {account: null};

        const account = {username: "testun", password: "testpw"};

        const action = actions.changeAccount(account);

        const newState = reducer(initialState, action);

        expect(newState.account.username).toEqual("testun");
        expect(newState.account.password).toEqual("testpw");
    });
});
