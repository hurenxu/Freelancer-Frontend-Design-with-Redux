import expect from 'expect';
import * as actions from '../redux/actions';
import { CHANGE_ACCOUNT } from "../redux/actions";

describe('Change account action', () => {
    it('should create a CHANGE_ACCOUNT action', () => {
        const account = {
            username: 'testun',
            password: 'testpw'
        };

        const expectedAction = {
            type: CHANGE_ACCOUNT,
            account: account
        };

        const action = actions.changeAccount(account);

        expect(action).toEqual(expectedAction);
    });
});
