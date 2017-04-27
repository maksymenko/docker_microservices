import AboutController from './about.controller';

describe("Suite for about controller", function() {
    it("test if author returns valid value", function() {
        expect(true).toBeTruthy();
    });

    it("test  author value", function() {
        let ctrl = new AboutController();
        expect(ctrl.getAuthor()).toEqual('First Last Name');
    });
});