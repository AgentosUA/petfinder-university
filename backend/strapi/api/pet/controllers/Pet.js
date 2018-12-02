'use strict';

/**
 * Pet.js controller
 *
 * @description: A set of functions called "actions" for managing `Pet`.
 */

module.exports = {

  /**
   * Retrieve pet records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.pet.search(ctx.query);
    } else {
      return strapi.services.pet.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a pet record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.pet.fetch(ctx.params);
  },

  /**
   * Count pet records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pet.count(ctx.query);
  },

  /**
   * Create a/an pet record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pet.add(ctx.request.body);
  },

  /**
   * Update a/an pet record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pet.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pet record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pet.remove(ctx.params);
  }
};
