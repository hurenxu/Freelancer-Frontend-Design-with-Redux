import expect from 'expect';
import reducer from '../redux/reducers';
import * as actions from '../redux/actions';

describe('Add Application Reducer', () => {

    it("test addApplication， not in suggestion list", () => {
        const initialState = {
            account: {
                username: "Joeyonng",
                password: "123",
                applications: [],
                suggestions: [10],
            }};

        const id = 1;

        const action = actions.addApplication(id);

        const newState = reducer(initialState, action);

        expect(newState.account.applications.length).toEqual(1);
        expect(newState.account.applications[0]).toEqual(1);
        expect(newState.account.suggestions.length).toEqual(1);
        expect(newState.account.suggestions[0]).toEqual(10);
    });

    it("test addApplication， in suggestion list", () => {
        const initialState = {
            account: {
                username: "Joeyonng",
                password: "123",
                applications: [],
                suggestions: [0, 1, 2],
            }};

        const id = 1;

        const action = actions.addApplication(id);

        const newState = reducer(initialState, action);

        expect(newState.account.applications.length).toEqual(1);
        expect(newState.account.applications[0]).toEqual(1);
        expect(newState.account.suggestions.length).toEqual(2);
        expect(newState.account.suggestions[0]).toEqual(0);
        expect(newState.account.suggestions[1]).toEqual(2);
    });
});
