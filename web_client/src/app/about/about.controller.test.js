describe("Suite for about controller", function() {
    it("test if author returns valid value", function() {
        expect(true).toBeTruthy();
    });

    it("test  author value", function() {
        let author = 'First Last Name';
        expect(author).toEqual('First Last Name');
    });
});