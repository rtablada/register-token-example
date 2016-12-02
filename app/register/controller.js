import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    saveUser(formValues) {
      const user = this.store.createRecord('user', formValues);

      user.save().then(() => {
        const credentials = {identification: formValues.email, password: formValues.password};
        const authenticator = 'authenticator:jwt';

        this.get('session').authenticate(authenticator, credentials);
      });
    }
  }
});
