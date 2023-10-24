const app = Vue.createApp({

  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      specialAttackbutton: 0
    }
  },

  computed: {

    monsterBarStyle() {
      return {width: this.monsterHealth + '%'}
    },

    playerBarStyle() {
      return {width: this.playerHealth + '%'}
    },

    specialAttackControl() {
      return (this.specialAttackbutton % 3 !== 0)
    }
  },

  methods: {
    attackMonster() {

      this.specialAttackbutton++

      console.log(this.specialAttackbutton)
      // Math.random gives a random value between 0 and 1 , but we need the value between 5 and 12 so we multiply it by (12-5)
      // Math.floor it return a decimal number

      const attackValue = Math.floor(Math.random() * (12-5)) + 5

      // Now when we attack (when we click on the attack button the attackMonster funstion will be fired)
      // SO the monster health will be reduced by a random Value (attack value)

      // this.monsterHealth = this.monsterHealth - attackValue

      this.monsterHealth -= attackValue

      // we attack back

      this.attackPlayer()

    },

    attackPlayer() {

      // the player will be attacked so we add button to attack the player and the method to reduce his health

      const attackValue = Math.floor(Math.random() * (12-5)) + 5

      this.playerHealth -= attackValue

      console.log('Monster Health : ', this.monsterHealth)
      console.log('Player Health : ', this.playerHealth)
    },


    specialAttackMonster() {

      this.specialAttackbutton++
      const specialAttack = Math.floor(Math.random() * 5) + 10

      this.monsterHealth -= specialAttack

      if (this.playerHealth > 50){
        this.specialAttackPlayer()
      } else {
        this.attackPlayer()
      }

    },

    specialAttackPlayer() {

      const specialAttack = Math.floor(Math.random() * 5) + 10
      this.playerHealth -= specialAttack

    }

  }
})

app.mount('#game')
