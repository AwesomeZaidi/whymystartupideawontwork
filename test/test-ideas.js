// test-ideas.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const Idea = require('../models/idea');

const sampleIdea = {
    "pitch": "IoT Toaster"
}

chai.use(chaiHttp);

describe('Ideas Landing Page', function() {
    it('should have a live landing page', function (done) {
      chai.request('localhost:3000')
        .get('/')
        .end(function (err, res){
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  // TEST NEW IDEA FORM DISPLAY
  it('should display new form on /ideas/new GET', (done) => {
    chai.request('localhost:3000')
      .get('/ideas/new')    
        .end((err, res) => {
            if(err) {done(err)}
          res.should.have.status(200);
          res.should.be.html
          done();
        });
  });

    // POST (create) NEW IDEA
    // Need some help understanding the warnings I'm recieving with this test case.
    it('should create new idea on /ideas/ POST/CREATE', (done) => {
        chai.request('localhost:3000')
        .post('/ideas/?pitch=HelloThere')    
        .end((err, res) => {
            if(err) done(err)   
            res.should.have.status(300);
            res.should.be.html
            done();
        }).catch(done());;
        });

    // TEST SHOW SINGLE idea 
    it('should show a SINGLE idea on /ideas/<id> GET', (done) => {
        var idea = new Idea(sampleIdea);
        idea.save((err, data) => {
            chai.request('localhost:3000')
                .get(`/ideas/${data._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
        });
    });

  module.exports = server;


// describe('Ideas', ()  => {
//   // TEST INDEX
//   it('should index ALL ideas on / GET', (done) => {
//     chai.request(server)
//         .get('/')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.should.be.html;
//           done();
//         });
//   });

//   // TEST NEW
//   // TEST CREATE
//   // TEST SHOW
//   // TEST EDIT
//   // TEST UPDATE
//   // TEST DELETE
// });