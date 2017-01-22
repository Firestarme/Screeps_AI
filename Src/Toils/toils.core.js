module.exports = {

    Toil_CreatePath: function (creep, dest) {
        /// <param name="creep" type="Creep"/>
        /// <param name ="dest" type="RoomPos">

        creep.memory.Path = PathFinder.search(creep.pos, dest)
    },

    Toil_MovePath: function (creep) {
        /// <param name="creep" type="Creep"/>

        creep.moveByPath(creep.memory.Path)
    }

}