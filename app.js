const app = Vue.createApp({

  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    }
  },

  computed: {

    monsterBarStyle() {
      return {width: this.monsterHealth + '%'}
    },

    playerBarStyle() {
      return {width: this.playerHealth + '%'}
    }
    
  },

  methods: {
    attackMonster() {
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

  }
})

app.mount('#game')
