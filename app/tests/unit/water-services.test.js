var expect = require('chai').expect;

describe('Water services', function() {
  var resource;

  beforeEach(function(done) {
    angular.mock.module('trackerApp');
    done();
  });

  it('exists', inject(function($injector) {
      resource = $injector.get('Water');
      expect(resource).to.exist;
  }));

  it('has built-in CRUD functions', inject(function($injector) {
      resource = $injector.get('Water');
      expect(resource.get).to.exist;
      expect(resource.save).to.exist;
      expect(resource.query).to.exist;
      expect(resource.remove).to.exist;
      expect(resource.delete).to.exist;
  }));

  it('has custom getAll function', inject(function($injector) {
      resource = $injector.get('Water');
      expect(resource.getAll).to.exist;
  }));
  
});
