(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Cars
 * @header lbServices.Cars
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Cars` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Cars",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Cars/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Cars.fUser() instead.
        "prototype$__get__fUser": {
          url: urlBase + "/Cars/:id/fUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#create
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Cars",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#upsert
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Cars",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#exists
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Cars/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#findById
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Cars/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#find
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Cars",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#findOne
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Cars/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#updateAll
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Cars/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#deleteById
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Cars/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#count
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Cars/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cars#prototype$updateAttributes
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Cars/:id",
          method: "PUT"
        },

        // INTERNAL. Use FUser.cars.findById() instead.
        "::findById::fUser::cars": {
          url: urlBase + "/fUsers/:id/cars/:fk",
          method: "GET"
        },

        // INTERNAL. Use FUser.cars.destroyById() instead.
        "::destroyById::fUser::cars": {
          url: urlBase + "/fUsers/:id/cars/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.cars.updateById() instead.
        "::updateById::fUser::cars": {
          url: urlBase + "/fUsers/:id/cars/:fk",
          method: "PUT"
        },

        // INTERNAL. Use FUser.cars() instead.
        "::get::fUser::cars": {
          isArray: true,
          url: urlBase + "/fUsers/:id/cars",
          method: "GET"
        },

        // INTERNAL. Use FUser.cars.create() instead.
        "::create::fUser::cars": {
          url: urlBase + "/fUsers/:id/cars",
          method: "POST"
        },

        // INTERNAL. Use FUser.cars.destroyAll() instead.
        "::delete::fUser::cars": {
          url: urlBase + "/fUsers/:id/cars",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.cars.count() instead.
        "::count::fUser::cars": {
          url: urlBase + "/fUsers/:id/cars/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Cars#updateOrCreate
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Cars#update
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Cars#destroyById
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Cars#removeById
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Cars#modelName
    * @propertyOf lbServices.Cars
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Cars`.
    */
    R.modelName = "Cars";


        /**
         * @ngdoc method
         * @name lbServices.Cars#fUser
         * @methodOf lbServices.Cars
         *
         * @description
         *
         * Fetches belongsTo relation fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        R.fUser = function() {
          var TargetResource = $injector.get("FUser");
          var action = TargetResource["::get::Cars::fUser"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.FUser
 * @header lbServices.FUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "FUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/fUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.FUser#prototype$__findById__accessTokens
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/fUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/fUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#prototype$__updateById__accessTokens
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/fUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use FUser.cars.findById() instead.
        "prototype$__findById__cars": {
          url: urlBase + "/fUsers/:id/cars/:fk",
          method: "GET"
        },

        // INTERNAL. Use FUser.cars.destroyById() instead.
        "prototype$__destroyById__cars": {
          url: urlBase + "/fUsers/:id/cars/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.cars.updateById() instead.
        "prototype$__updateById__cars": {
          url: urlBase + "/fUsers/:id/cars/:fk",
          method: "PUT"
        },

        // INTERNAL. Use FUser.complexServices.findById() instead.
        "prototype$__findById__complexServices": {
          url: urlBase + "/fUsers/:id/complexServices/:fk",
          method: "GET"
        },

        // INTERNAL. Use FUser.complexServices.destroyById() instead.
        "prototype$__destroyById__complexServices": {
          url: urlBase + "/fUsers/:id/complexServices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.complexServices.updateById() instead.
        "prototype$__updateById__complexServices": {
          url: urlBase + "/fUsers/:id/complexServices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use FUser.bids.findById() instead.
        "prototype$__findById__bids": {
          url: urlBase + "/fUsers/:id/bids/:fk",
          method: "GET"
        },

        // INTERNAL. Use FUser.bids.destroyById() instead.
        "prototype$__destroyById__bids": {
          url: urlBase + "/fUsers/:id/bids/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.bids.updateById() instead.
        "prototype$__updateById__bids": {
          url: urlBase + "/fUsers/:id/bids/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#prototype$__get__accessTokens
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Queries accessTokens of fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/fUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#prototype$__create__accessTokens
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/fUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#prototype$__delete__accessTokens
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/fUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#prototype$__count__accessTokens
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Counts accessTokens of fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/fUsers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use FUser.cars() instead.
        "prototype$__get__cars": {
          isArray: true,
          url: urlBase + "/fUsers/:id/cars",
          method: "GET"
        },

        // INTERNAL. Use FUser.cars.create() instead.
        "prototype$__create__cars": {
          url: urlBase + "/fUsers/:id/cars",
          method: "POST"
        },

        // INTERNAL. Use FUser.cars.destroyAll() instead.
        "prototype$__delete__cars": {
          url: urlBase + "/fUsers/:id/cars",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.cars.count() instead.
        "prototype$__count__cars": {
          url: urlBase + "/fUsers/:id/cars/count",
          method: "GET"
        },

        // INTERNAL. Use FUser.complexServices() instead.
        "prototype$__get__complexServices": {
          isArray: true,
          url: urlBase + "/fUsers/:id/complexServices",
          method: "GET"
        },

        // INTERNAL. Use FUser.complexServices.create() instead.
        "prototype$__create__complexServices": {
          url: urlBase + "/fUsers/:id/complexServices",
          method: "POST"
        },

        // INTERNAL. Use FUser.complexServices.destroyAll() instead.
        "prototype$__delete__complexServices": {
          url: urlBase + "/fUsers/:id/complexServices",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.complexServices.count() instead.
        "prototype$__count__complexServices": {
          url: urlBase + "/fUsers/:id/complexServices/count",
          method: "GET"
        },

        // INTERNAL. Use FUser.bids() instead.
        "prototype$__get__bids": {
          isArray: true,
          url: urlBase + "/fUsers/:id/bids",
          method: "GET"
        },

        // INTERNAL. Use FUser.bids.create() instead.
        "prototype$__create__bids": {
          url: urlBase + "/fUsers/:id/bids",
          method: "POST"
        },

        // INTERNAL. Use FUser.bids.destroyAll() instead.
        "prototype$__delete__bids": {
          url: urlBase + "/fUsers/:id/bids",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.bids.count() instead.
        "prototype$__count__bids": {
          url: urlBase + "/fUsers/:id/bids/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#create
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/fUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#upsert
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/fUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#exists
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/fUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#findById
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/fUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#find
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/fUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#findOne
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/fUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#updateAll
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/fUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#deleteById
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/fUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#count
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/fUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#prototype$updateAttributes
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/fUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#login
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/fUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#logout
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/fUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#confirm
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/fUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#resetPassword
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/fUsers/reset",
          method: "POST"
        },

        // INTERNAL. Use Cars.fUser() instead.
        "::get::Cars::fUser": {
          url: urlBase + "/Cars/:id/fUser",
          method: "GET"
        },

        // INTERNAL. Use ComplexServices.fUser() instead.
        "::get::complexServices::fUser": {
          url: urlBase + "/complexServices/:id/fUser",
          method: "GET"
        },

        // INTERNAL. Use Bids.fUser() instead.
        "::get::Bids::fUser": {
          url: urlBase + "/Bids/:id/fUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.FUser#getCurrent
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/fUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.FUser#updateOrCreate
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.FUser#update
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.FUser#destroyById
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.FUser#removeById
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.FUser#getCachedCurrent
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.FUser#login} or
         * {@link lbServices.FUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A FUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser#isAuthenticated
         * @methodOf lbServices.FUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser#getCurrentId
         * @methodOf lbServices.FUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.FUser#modelName
    * @propertyOf lbServices.FUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `FUser`.
    */
    R.modelName = "FUser";

    /**
     * @ngdoc object
     * @name lbServices.FUser.cars
     * @header lbServices.FUser.cars
     * @object
     * @description
     *
     * The object `FUser.cars` groups methods
     * manipulating `Cars` instances related to `FUser`.
     *
     * Call {@link lbServices.FUser#cars FUser.cars()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.FUser#cars
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Queries cars of fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        R.cars = function() {
          var TargetResource = $injector.get("Cars");
          var action = TargetResource["::get::fUser::cars"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.cars#count
         * @methodOf lbServices.FUser.cars
         *
         * @description
         *
         * Counts cars of fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.cars.count = function() {
          var TargetResource = $injector.get("Cars");
          var action = TargetResource["::count::fUser::cars"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.cars#create
         * @methodOf lbServices.FUser.cars
         *
         * @description
         *
         * Creates a new instance in cars of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        R.cars.create = function() {
          var TargetResource = $injector.get("Cars");
          var action = TargetResource["::create::fUser::cars"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.cars#destroyAll
         * @methodOf lbServices.FUser.cars
         *
         * @description
         *
         * Deletes all cars of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cars.destroyAll = function() {
          var TargetResource = $injector.get("Cars");
          var action = TargetResource["::delete::fUser::cars"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.cars#destroyById
         * @methodOf lbServices.FUser.cars
         *
         * @description
         *
         * Delete a related item by id for cars.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for cars
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cars.destroyById = function() {
          var TargetResource = $injector.get("Cars");
          var action = TargetResource["::destroyById::fUser::cars"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.cars#findById
         * @methodOf lbServices.FUser.cars
         *
         * @description
         *
         * Find a related item by id for cars.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for cars
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        R.cars.findById = function() {
          var TargetResource = $injector.get("Cars");
          var action = TargetResource["::findById::fUser::cars"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.cars#updateById
         * @methodOf lbServices.FUser.cars
         *
         * @description
         *
         * Update a related item by id for cars.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for cars
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cars` object.)
         * </em>
         */
        R.cars.updateById = function() {
          var TargetResource = $injector.get("Cars");
          var action = TargetResource["::updateById::fUser::cars"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.FUser.complexServices
     * @header lbServices.FUser.complexServices
     * @object
     * @description
     *
     * The object `FUser.complexServices` groups methods
     * manipulating `ComplexServices` instances related to `FUser`.
     *
     * Call {@link lbServices.FUser#complexServices FUser.complexServices()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.FUser#complexServices
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Queries complexServices of fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        R.complexServices = function() {
          var TargetResource = $injector.get("ComplexServices");
          var action = TargetResource["::get::fUser::complexServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.complexServices#count
         * @methodOf lbServices.FUser.complexServices
         *
         * @description
         *
         * Counts complexServices of fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.complexServices.count = function() {
          var TargetResource = $injector.get("ComplexServices");
          var action = TargetResource["::count::fUser::complexServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.complexServices#create
         * @methodOf lbServices.FUser.complexServices
         *
         * @description
         *
         * Creates a new instance in complexServices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        R.complexServices.create = function() {
          var TargetResource = $injector.get("ComplexServices");
          var action = TargetResource["::create::fUser::complexServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.complexServices#destroyAll
         * @methodOf lbServices.FUser.complexServices
         *
         * @description
         *
         * Deletes all complexServices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.complexServices.destroyAll = function() {
          var TargetResource = $injector.get("ComplexServices");
          var action = TargetResource["::delete::fUser::complexServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.complexServices#destroyById
         * @methodOf lbServices.FUser.complexServices
         *
         * @description
         *
         * Delete a related item by id for complexServices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for complexServices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.complexServices.destroyById = function() {
          var TargetResource = $injector.get("ComplexServices");
          var action = TargetResource["::destroyById::fUser::complexServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.complexServices#findById
         * @methodOf lbServices.FUser.complexServices
         *
         * @description
         *
         * Find a related item by id for complexServices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for complexServices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        R.complexServices.findById = function() {
          var TargetResource = $injector.get("ComplexServices");
          var action = TargetResource["::findById::fUser::complexServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.complexServices#updateById
         * @methodOf lbServices.FUser.complexServices
         *
         * @description
         *
         * Update a related item by id for complexServices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for complexServices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        R.complexServices.updateById = function() {
          var TargetResource = $injector.get("ComplexServices");
          var action = TargetResource["::updateById::fUser::complexServices"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.FUser.bids
     * @header lbServices.FUser.bids
     * @object
     * @description
     *
     * The object `FUser.bids` groups methods
     * manipulating `Bids` instances related to `FUser`.
     *
     * Call {@link lbServices.FUser#bids FUser.bids()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.FUser#bids
         * @methodOf lbServices.FUser
         *
         * @description
         *
         * Queries bids of fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        R.bids = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::get::fUser::bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.bids#count
         * @methodOf lbServices.FUser.bids
         *
         * @description
         *
         * Counts bids of fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.bids.count = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::count::fUser::bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.bids#create
         * @methodOf lbServices.FUser.bids
         *
         * @description
         *
         * Creates a new instance in bids of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        R.bids.create = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::create::fUser::bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.bids#destroyAll
         * @methodOf lbServices.FUser.bids
         *
         * @description
         *
         * Deletes all bids of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.bids.destroyAll = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::delete::fUser::bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.bids#destroyById
         * @methodOf lbServices.FUser.bids
         *
         * @description
         *
         * Delete a related item by id for bids.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for bids
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.bids.destroyById = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::destroyById::fUser::bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.bids#findById
         * @methodOf lbServices.FUser.bids
         *
         * @description
         *
         * Find a related item by id for bids.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for bids
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        R.bids.findById = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::findById::fUser::bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FUser.bids#updateById
         * @methodOf lbServices.FUser.bids
         *
         * @description
         *
         * Update a related item by id for bids.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for bids
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        R.bids.updateById = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::updateById::fUser::bids"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Services
 * @header lbServices.Services
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Services` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Services",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/services/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Services.WasherServices.findById() instead.
        "prototype$__findById__WasherServices": {
          url: urlBase + "/services/:id/WasherServices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Services.WasherServices.destroyById() instead.
        "prototype$__destroyById__WasherServices": {
          url: urlBase + "/services/:id/WasherServices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Services.WasherServices.updateById() instead.
        "prototype$__updateById__WasherServices": {
          url: urlBase + "/services/:id/WasherServices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Services.WasherServices() instead.
        "prototype$__get__WasherServices": {
          isArray: true,
          url: urlBase + "/services/:id/WasherServices",
          method: "GET"
        },

        // INTERNAL. Use Services.WasherServices.create() instead.
        "prototype$__create__WasherServices": {
          url: urlBase + "/services/:id/WasherServices",
          method: "POST"
        },

        // INTERNAL. Use Services.WasherServices.destroyAll() instead.
        "prototype$__delete__WasherServices": {
          url: urlBase + "/services/:id/WasherServices",
          method: "DELETE"
        },

        // INTERNAL. Use Services.WasherServices.count() instead.
        "prototype$__count__WasherServices": {
          url: urlBase + "/services/:id/WasherServices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#create
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Services` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/services",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#upsert
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Services` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/services",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#exists
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/services/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#findById
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Services` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/services/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#find
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Services` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/services",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#findOne
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Services` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/services/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#updateAll
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/services/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#deleteById
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/services/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#count
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/services/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Services#prototype$updateAttributes
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Services` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/services/:id",
          method: "PUT"
        },

        // INTERNAL. Use WasherServices.services() instead.
        "::get::WasherServices::services": {
          url: urlBase + "/WasherServices/:id/services",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Services#updateOrCreate
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Services` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Services#update
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Services#destroyById
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Services#removeById
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Services#modelName
    * @propertyOf lbServices.Services
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Services`.
    */
    R.modelName = "Services";

    /**
     * @ngdoc object
     * @name lbServices.Services.WasherServices
     * @header lbServices.Services.WasherServices
     * @object
     * @description
     *
     * The object `Services.WasherServices` groups methods
     * manipulating `WasherServices` instances related to `Services`.
     *
     * Call {@link lbServices.Services#WasherServices Services.WasherServices()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Services#WasherServices
         * @methodOf lbServices.Services
         *
         * @description
         *
         * Queries WasherServices of services.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        R.WasherServices = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::get::services::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Services.WasherServices#count
         * @methodOf lbServices.Services.WasherServices
         *
         * @description
         *
         * Counts WasherServices of services.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.WasherServices.count = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::count::services::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Services.WasherServices#create
         * @methodOf lbServices.Services.WasherServices
         *
         * @description
         *
         * Creates a new instance in WasherServices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        R.WasherServices.create = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::create::services::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Services.WasherServices#destroyAll
         * @methodOf lbServices.Services.WasherServices
         *
         * @description
         *
         * Deletes all WasherServices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WasherServices.destroyAll = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::delete::services::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Services.WasherServices#destroyById
         * @methodOf lbServices.Services.WasherServices
         *
         * @description
         *
         * Delete a related item by id for WasherServices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WasherServices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WasherServices.destroyById = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::destroyById::services::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Services.WasherServices#findById
         * @methodOf lbServices.Services.WasherServices
         *
         * @description
         *
         * Find a related item by id for WasherServices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WasherServices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        R.WasherServices.findById = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::findById::services::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Services.WasherServices#updateById
         * @methodOf lbServices.Services.WasherServices
         *
         * @description
         *
         * Update a related item by id for WasherServices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WasherServices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        R.WasherServices.updateById = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::updateById::services::WasherServices"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ComplexServices
 * @header lbServices.ComplexServices
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ComplexServices` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ComplexServices",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/complexServices/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ComplexServices.fUser() instead.
        "prototype$__get__fUser": {
          url: urlBase + "/complexServices/:id/fUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#create
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/complexServices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#upsert
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/complexServices",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#exists
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/complexServices/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#findById
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/complexServices/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#find
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/complexServices",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#findOne
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/complexServices/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#updateAll
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/complexServices/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#deleteById
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/complexServices/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#count
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/complexServices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#prototype$updateAttributes
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/complexServices/:id",
          method: "PUT"
        },

        // INTERNAL. Use FUser.complexServices.findById() instead.
        "::findById::fUser::complexServices": {
          url: urlBase + "/fUsers/:id/complexServices/:fk",
          method: "GET"
        },

        // INTERNAL. Use FUser.complexServices.destroyById() instead.
        "::destroyById::fUser::complexServices": {
          url: urlBase + "/fUsers/:id/complexServices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.complexServices.updateById() instead.
        "::updateById::fUser::complexServices": {
          url: urlBase + "/fUsers/:id/complexServices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use FUser.complexServices() instead.
        "::get::fUser::complexServices": {
          isArray: true,
          url: urlBase + "/fUsers/:id/complexServices",
          method: "GET"
        },

        // INTERNAL. Use FUser.complexServices.create() instead.
        "::create::fUser::complexServices": {
          url: urlBase + "/fUsers/:id/complexServices",
          method: "POST"
        },

        // INTERNAL. Use FUser.complexServices.destroyAll() instead.
        "::delete::fUser::complexServices": {
          url: urlBase + "/fUsers/:id/complexServices",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.complexServices.count() instead.
        "::count::fUser::complexServices": {
          url: urlBase + "/fUsers/:id/complexServices/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#updateOrCreate
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ComplexServices` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#update
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#destroyById
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#removeById
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ComplexServices#modelName
    * @propertyOf lbServices.ComplexServices
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ComplexServices`.
    */
    R.modelName = "ComplexServices";


        /**
         * @ngdoc method
         * @name lbServices.ComplexServices#fUser
         * @methodOf lbServices.ComplexServices
         *
         * @description
         *
         * Fetches belongsTo relation fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        R.fUser = function() {
          var TargetResource = $injector.get("FUser");
          var action = TargetResource["::get::complexServices::fUser"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Washers
 * @header lbServices.Washers
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Washers` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Washers",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Washers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Washers#prototype$__findById__accessTokens
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/Washers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/Washers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#prototype$__updateById__accessTokens
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/Washers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Washers.WasherProfile.findById() instead.
        "prototype$__findById__WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile/:fk",
          method: "GET"
        },

        // INTERNAL. Use Washers.WasherProfile.destroyById() instead.
        "prototype$__destroyById__WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Washers.WasherProfile.updateById() instead.
        "prototype$__updateById__WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#prototype$__get__accessTokens
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Queries accessTokens of Washers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Washers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#prototype$__create__accessTokens
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Washers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#prototype$__delete__accessTokens
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Washers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#prototype$__count__accessTokens
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Counts accessTokens of Washers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Washers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Washers.WasherProfile() instead.
        "prototype$__get__WasherProfile": {
          isArray: true,
          url: urlBase + "/Washers/:id/WasherProfile",
          method: "GET"
        },

        // INTERNAL. Use Washers.WasherProfile.create() instead.
        "prototype$__create__WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile",
          method: "POST"
        },

        // INTERNAL. Use Washers.WasherProfile.destroyAll() instead.
        "prototype$__delete__WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile",
          method: "DELETE"
        },

        // INTERNAL. Use Washers.WasherProfile.count() instead.
        "prototype$__count__WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#create
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Washers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#upsert
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Washers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#exists
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Washers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#findById
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Washers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#find
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Washers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#findOne
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Washers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#updateAll
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Washers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#deleteById
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Washers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#count
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Washers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#prototype$updateAttributes
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Washers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#login
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Washers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#logout
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Washers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#confirm
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Washers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#resetPassword
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Washers/reset",
          method: "POST"
        },

        // INTERNAL. Use WasherProfile.Washers() instead.
        "::get::WasherProfile::Washers": {
          url: urlBase + "/WasherProfiles/:id/Washers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Washers#getCurrent
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Washers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Washers#updateOrCreate
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Washers#update
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Washers#destroyById
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Washers#removeById
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Washers#getCachedCurrent
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Washers#login} or
         * {@link lbServices.Washers#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Washers instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Washers#isAuthenticated
         * @methodOf lbServices.Washers
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Washers#getCurrentId
         * @methodOf lbServices.Washers
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Washers#modelName
    * @propertyOf lbServices.Washers
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Washers`.
    */
    R.modelName = "Washers";

    /**
     * @ngdoc object
     * @name lbServices.Washers.WasherProfile
     * @header lbServices.Washers.WasherProfile
     * @object
     * @description
     *
     * The object `Washers.WasherProfile` groups methods
     * manipulating `WasherProfile` instances related to `Washers`.
     *
     * Call {@link lbServices.Washers#WasherProfile Washers.WasherProfile()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Washers#WasherProfile
         * @methodOf lbServices.Washers
         *
         * @description
         *
         * Queries WasherProfile of Washers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        R.WasherProfile = function() {
          var TargetResource = $injector.get("WasherProfile");
          var action = TargetResource["::get::Washers::WasherProfile"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Washers.WasherProfile#count
         * @methodOf lbServices.Washers.WasherProfile
         *
         * @description
         *
         * Counts WasherProfile of Washers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.WasherProfile.count = function() {
          var TargetResource = $injector.get("WasherProfile");
          var action = TargetResource["::count::Washers::WasherProfile"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Washers.WasherProfile#create
         * @methodOf lbServices.Washers.WasherProfile
         *
         * @description
         *
         * Creates a new instance in WasherProfile of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        R.WasherProfile.create = function() {
          var TargetResource = $injector.get("WasherProfile");
          var action = TargetResource["::create::Washers::WasherProfile"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Washers.WasherProfile#destroyAll
         * @methodOf lbServices.Washers.WasherProfile
         *
         * @description
         *
         * Deletes all WasherProfile of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WasherProfile.destroyAll = function() {
          var TargetResource = $injector.get("WasherProfile");
          var action = TargetResource["::delete::Washers::WasherProfile"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Washers.WasherProfile#destroyById
         * @methodOf lbServices.Washers.WasherProfile
         *
         * @description
         *
         * Delete a related item by id for WasherProfile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for WasherProfile
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WasherProfile.destroyById = function() {
          var TargetResource = $injector.get("WasherProfile");
          var action = TargetResource["::destroyById::Washers::WasherProfile"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Washers.WasherProfile#findById
         * @methodOf lbServices.Washers.WasherProfile
         *
         * @description
         *
         * Find a related item by id for WasherProfile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for WasherProfile
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        R.WasherProfile.findById = function() {
          var TargetResource = $injector.get("WasherProfile");
          var action = TargetResource["::findById::Washers::WasherProfile"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Washers.WasherProfile#updateById
         * @methodOf lbServices.Washers.WasherProfile
         *
         * @description
         *
         * Update a related item by id for WasherProfile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for WasherProfile
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        R.WasherProfile.updateById = function() {
          var TargetResource = $injector.get("WasherProfile");
          var action = TargetResource["::updateById::Washers::WasherProfile"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Bids
 * @header lbServices.Bids
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Bids` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Bids",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Bids/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Bids.fUser() instead.
        "prototype$__get__fUser": {
          url: urlBase + "/Bids/:id/fUser",
          method: "GET"
        },

        // INTERNAL. Use Bids.WasherProfile() instead.
        "prototype$__get__WasherProfile": {
          url: urlBase + "/Bids/:id/WasherProfile",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#create
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Bids",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#upsert
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Bids",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#exists
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Bids/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#findById
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Bids/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#find
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Bids",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#findOne
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Bids/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#updateAll
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Bids/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#deleteById
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Bids/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#count
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Bids/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bids#prototype$updateAttributes
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Bids/:id",
          method: "PUT"
        },

        // INTERNAL. Use FUser.bids.findById() instead.
        "::findById::fUser::bids": {
          url: urlBase + "/fUsers/:id/bids/:fk",
          method: "GET"
        },

        // INTERNAL. Use FUser.bids.destroyById() instead.
        "::destroyById::fUser::bids": {
          url: urlBase + "/fUsers/:id/bids/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.bids.updateById() instead.
        "::updateById::fUser::bids": {
          url: urlBase + "/fUsers/:id/bids/:fk",
          method: "PUT"
        },

        // INTERNAL. Use FUser.bids() instead.
        "::get::fUser::bids": {
          isArray: true,
          url: urlBase + "/fUsers/:id/bids",
          method: "GET"
        },

        // INTERNAL. Use FUser.bids.create() instead.
        "::create::fUser::bids": {
          url: urlBase + "/fUsers/:id/bids",
          method: "POST"
        },

        // INTERNAL. Use FUser.bids.destroyAll() instead.
        "::delete::fUser::bids": {
          url: urlBase + "/fUsers/:id/bids",
          method: "DELETE"
        },

        // INTERNAL. Use FUser.bids.count() instead.
        "::count::fUser::bids": {
          url: urlBase + "/fUsers/:id/bids/count",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.Bids.findById() instead.
        "::findById::WasherProfile::Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids/:fk",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.Bids.destroyById() instead.
        "::destroyById::WasherProfile::Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WasherProfile.Bids.updateById() instead.
        "::updateById::WasherProfile::Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WasherProfile.Bids() instead.
        "::get::WasherProfile::Bids": {
          isArray: true,
          url: urlBase + "/WasherProfiles/:id/Bids",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.Bids.create() instead.
        "::create::WasherProfile::Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids",
          method: "POST"
        },

        // INTERNAL. Use WasherProfile.Bids.destroyAll() instead.
        "::delete::WasherProfile::Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids",
          method: "DELETE"
        },

        // INTERNAL. Use WasherProfile.Bids.count() instead.
        "::count::WasherProfile::Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Bids#updateOrCreate
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Bids#update
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Bids#destroyById
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Bids#removeById
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Bids#modelName
    * @propertyOf lbServices.Bids
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Bids`.
    */
    R.modelName = "Bids";


        /**
         * @ngdoc method
         * @name lbServices.Bids#fUser
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Fetches belongsTo relation fUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FUser` object.)
         * </em>
         */
        R.fUser = function() {
          var TargetResource = $injector.get("FUser");
          var action = TargetResource["::get::Bids::fUser"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Bids#WasherProfile
         * @methodOf lbServices.Bids
         *
         * @description
         *
         * Fetches belongsTo relation WasherProfile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        R.WasherProfile = function() {
          var TargetResource = $injector.get("WasherProfile");
          var action = TargetResource["::get::Bids::WasherProfile"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WasherProfile
 * @header lbServices.WasherProfile
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WasherProfile` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WasherProfile",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WasherProfiles/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use WasherProfile.Washers() instead.
        "prototype$__get__Washers": {
          url: urlBase + "/WasherProfiles/:id/Washers",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.Bids.findById() instead.
        "prototype$__findById__Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids/:fk",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.Bids.destroyById() instead.
        "prototype$__destroyById__Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WasherProfile.Bids.updateById() instead.
        "prototype$__updateById__Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WasherProfile.WasherServices.findById() instead.
        "prototype$__findById__WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices/:fk",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.WasherServices.destroyById() instead.
        "prototype$__destroyById__WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WasherProfile.WasherServices.updateById() instead.
        "prototype$__updateById__WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WasherProfile.Bids() instead.
        "prototype$__get__Bids": {
          isArray: true,
          url: urlBase + "/WasherProfiles/:id/Bids",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.Bids.create() instead.
        "prototype$__create__Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids",
          method: "POST"
        },

        // INTERNAL. Use WasherProfile.Bids.destroyAll() instead.
        "prototype$__delete__Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids",
          method: "DELETE"
        },

        // INTERNAL. Use WasherProfile.Bids.count() instead.
        "prototype$__count__Bids": {
          url: urlBase + "/WasherProfiles/:id/Bids/count",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.WasherServices() instead.
        "prototype$__get__WasherServices": {
          isArray: true,
          url: urlBase + "/WasherProfiles/:id/WasherServices",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.WasherServices.create() instead.
        "prototype$__create__WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices",
          method: "POST"
        },

        // INTERNAL. Use WasherProfile.WasherServices.destroyAll() instead.
        "prototype$__delete__WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices",
          method: "DELETE"
        },

        // INTERNAL. Use WasherProfile.WasherServices.count() instead.
        "prototype$__count__WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#create
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WasherProfiles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#upsert
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WasherProfiles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#exists
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WasherProfiles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#findById
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WasherProfiles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#find
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WasherProfiles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#findOne
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WasherProfiles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#updateAll
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/WasherProfiles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#deleteById
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/WasherProfiles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#count
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WasherProfiles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#prototype$updateAttributes
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WasherProfiles/:id",
          method: "PUT"
        },

        // INTERNAL. Use Washers.WasherProfile.findById() instead.
        "::findById::Washers::WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile/:fk",
          method: "GET"
        },

        // INTERNAL. Use Washers.WasherProfile.destroyById() instead.
        "::destroyById::Washers::WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Washers.WasherProfile.updateById() instead.
        "::updateById::Washers::WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Washers.WasherProfile() instead.
        "::get::Washers::WasherProfile": {
          isArray: true,
          url: urlBase + "/Washers/:id/WasherProfile",
          method: "GET"
        },

        // INTERNAL. Use Washers.WasherProfile.create() instead.
        "::create::Washers::WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile",
          method: "POST"
        },

        // INTERNAL. Use Washers.WasherProfile.destroyAll() instead.
        "::delete::Washers::WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile",
          method: "DELETE"
        },

        // INTERNAL. Use Washers.WasherProfile.count() instead.
        "::count::Washers::WasherProfile": {
          url: urlBase + "/Washers/:id/WasherProfile/count",
          method: "GET"
        },

        // INTERNAL. Use Bids.WasherProfile() instead.
        "::get::Bids::WasherProfile": {
          url: urlBase + "/Bids/:id/WasherProfile",
          method: "GET"
        },

        // INTERNAL. Use WasherServices.WasherProfile() instead.
        "::get::WasherServices::WasherProfile": {
          url: urlBase + "/WasherServices/:id/WasherProfile",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#updateOrCreate
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#update
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#destroyById
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#removeById
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.WasherProfile#modelName
    * @propertyOf lbServices.WasherProfile
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WasherProfile`.
    */
    R.modelName = "WasherProfile";


        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#Washers
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Fetches belongsTo relation Washers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Washers` object.)
         * </em>
         */
        R.Washers = function() {
          var TargetResource = $injector.get("Washers");
          var action = TargetResource["::get::WasherProfile::Washers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.WasherProfile.Bids
     * @header lbServices.WasherProfile.Bids
     * @object
     * @description
     *
     * The object `WasherProfile.Bids` groups methods
     * manipulating `Bids` instances related to `WasherProfile`.
     *
     * Call {@link lbServices.WasherProfile#Bids WasherProfile.Bids()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#Bids
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Queries Bids of WasherProfile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        R.Bids = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::get::WasherProfile::Bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.Bids#count
         * @methodOf lbServices.WasherProfile.Bids
         *
         * @description
         *
         * Counts Bids of WasherProfile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.Bids.count = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::count::WasherProfile::Bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.Bids#create
         * @methodOf lbServices.WasherProfile.Bids
         *
         * @description
         *
         * Creates a new instance in Bids of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        R.Bids.create = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::create::WasherProfile::Bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.Bids#destroyAll
         * @methodOf lbServices.WasherProfile.Bids
         *
         * @description
         *
         * Deletes all Bids of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.Bids.destroyAll = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::delete::WasherProfile::Bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.Bids#destroyById
         * @methodOf lbServices.WasherProfile.Bids
         *
         * @description
         *
         * Delete a related item by id for Bids.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Bids
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.Bids.destroyById = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::destroyById::WasherProfile::Bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.Bids#findById
         * @methodOf lbServices.WasherProfile.Bids
         *
         * @description
         *
         * Find a related item by id for Bids.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Bids
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        R.Bids.findById = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::findById::WasherProfile::Bids"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.Bids#updateById
         * @methodOf lbServices.WasherProfile.Bids
         *
         * @description
         *
         * Update a related item by id for Bids.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Bids
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bids` object.)
         * </em>
         */
        R.Bids.updateById = function() {
          var TargetResource = $injector.get("Bids");
          var action = TargetResource["::updateById::WasherProfile::Bids"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.WasherProfile.WasherServices
     * @header lbServices.WasherProfile.WasherServices
     * @object
     * @description
     *
     * The object `WasherProfile.WasherServices` groups methods
     * manipulating `WasherServices` instances related to `WasherProfile`.
     *
     * Call {@link lbServices.WasherProfile#WasherServices WasherProfile.WasherServices()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.WasherProfile#WasherServices
         * @methodOf lbServices.WasherProfile
         *
         * @description
         *
         * Queries WasherServices of WasherProfile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        R.WasherServices = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::get::WasherProfile::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.WasherServices#count
         * @methodOf lbServices.WasherProfile.WasherServices
         *
         * @description
         *
         * Counts WasherServices of WasherProfile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.WasherServices.count = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::count::WasherProfile::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.WasherServices#create
         * @methodOf lbServices.WasherProfile.WasherServices
         *
         * @description
         *
         * Creates a new instance in WasherServices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        R.WasherServices.create = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::create::WasherProfile::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.WasherServices#destroyAll
         * @methodOf lbServices.WasherProfile.WasherServices
         *
         * @description
         *
         * Deletes all WasherServices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WasherServices.destroyAll = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::delete::WasherProfile::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.WasherServices#destroyById
         * @methodOf lbServices.WasherProfile.WasherServices
         *
         * @description
         *
         * Delete a related item by id for WasherServices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WasherServices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WasherServices.destroyById = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::destroyById::WasherProfile::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.WasherServices#findById
         * @methodOf lbServices.WasherProfile.WasherServices
         *
         * @description
         *
         * Find a related item by id for WasherServices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WasherServices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        R.WasherServices.findById = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::findById::WasherProfile::WasherServices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherProfile.WasherServices#updateById
         * @methodOf lbServices.WasherProfile.WasherServices
         *
         * @description
         *
         * Update a related item by id for WasherServices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WasherServices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        R.WasherServices.updateById = function() {
          var TargetResource = $injector.get("WasherServices");
          var action = TargetResource["::updateById::WasherProfile::WasherServices"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WasherServices
 * @header lbServices.WasherServices
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WasherServices` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WasherServices",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WasherServices/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use WasherServices.WasherProfile() instead.
        "prototype$__get__WasherProfile": {
          url: urlBase + "/WasherServices/:id/WasherProfile",
          method: "GET"
        },

        // INTERNAL. Use WasherServices.services() instead.
        "prototype$__get__services": {
          url: urlBase + "/WasherServices/:id/services",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#create
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WasherServices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#upsert
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WasherServices",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#exists
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WasherServices/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#findById
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WasherServices/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#find
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WasherServices",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#findOne
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WasherServices/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#updateAll
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/WasherServices/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#deleteById
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/WasherServices/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#count
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WasherServices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#prototype$updateAttributes
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WasherServices/:id",
          method: "PUT"
        },

        // INTERNAL. Use Services.WasherServices.findById() instead.
        "::findById::services::WasherServices": {
          url: urlBase + "/services/:id/WasherServices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Services.WasherServices.destroyById() instead.
        "::destroyById::services::WasherServices": {
          url: urlBase + "/services/:id/WasherServices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Services.WasherServices.updateById() instead.
        "::updateById::services::WasherServices": {
          url: urlBase + "/services/:id/WasherServices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Services.WasherServices() instead.
        "::get::services::WasherServices": {
          isArray: true,
          url: urlBase + "/services/:id/WasherServices",
          method: "GET"
        },

        // INTERNAL. Use Services.WasherServices.create() instead.
        "::create::services::WasherServices": {
          url: urlBase + "/services/:id/WasherServices",
          method: "POST"
        },

        // INTERNAL. Use Services.WasherServices.destroyAll() instead.
        "::delete::services::WasherServices": {
          url: urlBase + "/services/:id/WasherServices",
          method: "DELETE"
        },

        // INTERNAL. Use Services.WasherServices.count() instead.
        "::count::services::WasherServices": {
          url: urlBase + "/services/:id/WasherServices/count",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.WasherServices.findById() instead.
        "::findById::WasherProfile::WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices/:fk",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.WasherServices.destroyById() instead.
        "::destroyById::WasherProfile::WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WasherProfile.WasherServices.updateById() instead.
        "::updateById::WasherProfile::WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WasherProfile.WasherServices() instead.
        "::get::WasherProfile::WasherServices": {
          isArray: true,
          url: urlBase + "/WasherProfiles/:id/WasherServices",
          method: "GET"
        },

        // INTERNAL. Use WasherProfile.WasherServices.create() instead.
        "::create::WasherProfile::WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices",
          method: "POST"
        },

        // INTERNAL. Use WasherProfile.WasherServices.destroyAll() instead.
        "::delete::WasherProfile::WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices",
          method: "DELETE"
        },

        // INTERNAL. Use WasherProfile.WasherServices.count() instead.
        "::count::WasherProfile::WasherServices": {
          url: urlBase + "/WasherProfiles/:id/WasherServices/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WasherServices#updateOrCreate
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherServices` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#update
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#destroyById
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#removeById
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.WasherServices#modelName
    * @propertyOf lbServices.WasherServices
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WasherServices`.
    */
    R.modelName = "WasherServices";


        /**
         * @ngdoc method
         * @name lbServices.WasherServices#WasherProfile
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Fetches belongsTo relation WasherProfile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WasherProfile` object.)
         * </em>
         */
        R.WasherProfile = function() {
          var TargetResource = $injector.get("WasherProfile");
          var action = TargetResource["::get::WasherServices::WasherProfile"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WasherServices#services
         * @methodOf lbServices.WasherServices
         *
         * @description
         *
         * Fetches belongsTo relation services.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Services` object.)
         * </em>
         */
        R.services = function() {
          var TargetResource = $injector.get("Services");
          var action = TargetResource["::get::WasherServices::services"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
