describe('my awesome website', function() {
    it('should do some chai assertions', function() {
        browser.url('/project/components/test-component/c-test-component.html');
        browser.getTitle().should.be.equal('Working!');
    });

    it('should do some chai assertions', function() {
        browser.url('http://google.com');
        browser.getTitle().should.be.equal('Google');
    });
});