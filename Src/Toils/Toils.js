module.exports = {

  /**
   * Toil_CreatePath - description
   *
   * @param  {Creep} creep description
   * @param  {RoomPos} dest  description
   */
  Toil_CreatePath: function(creep) {
     /** @property {RoomObject} target **/
    var target = Game.getObjectById(creep.memory.TargetID)
    creep.memory.Path = PathFinder.search(creep.pos, target.pos)
  },

  /**
   * Toil_MovePath - description
   *
   * @param  {Creep} creep description
   */
  Toil_MovePath: function(creep) {
    creep.moveByPath(creep.memory.Path)
  },

  /**
   * Toil_SetTargetID - description
   *
   * @param  {Creep} creep description
   * @param  {string}
   */
  Toil_SetTargetID: function(creep, target) {
    creep.memory.TargetID = target
  },

  /**
   * Toil_Harvest - description
   *
   * @param  {Creep} creep description
   */
  Toil_Harvest: function(creep){
    creep.harvest(Game.getObjectById(creep.memory.TargetID))
  }

}
