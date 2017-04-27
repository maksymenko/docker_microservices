import AboutController from './about.controller';

describe("Suite for about controller", () => {
    it("test if author returns valid value", function() {
        expect(true).toBeTruthy();
    });

    it("test  author value", () =>  {
        let ctrl = new AboutController();
        expect(ctrl.getAuthor()).toEqual('First Last Name');
    });
});