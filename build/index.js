/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/comment-edit-link.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/comment-edit-link.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const commentEditLink = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "m6.249 11.065.44-.44h3.186l-1.5 1.5H7.31l-1.957 1.96A.792.792 0 0 1 4 13.524V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.5L12.5 8V5.5h-7v6.315l.749-.75ZM20 19.75H7v-1.5h13v1.5Zm0-12.653-8.967 9.064L8 17l.867-2.935L17.833 5 20 7.097Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentEditLink);
//# sourceMappingURL=comment-edit-link.js.map

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMENT_CONTENT_STRINGS: () => (/* binding */ COMMENT_CONTENT_STRINGS),
/* harmony export */   cleanEmptyObject: () => (/* binding */ cleanEmptyObject)
/* harmony export */ });
const COMMENT_CONTENT_STRINGS = ['Great work!', 'This needs improvement.', 'Excellent point made here.', 'Could you explain more details?', 'I completely agree with this approach.', 'This section needs more detailed information.', 'Perfect example of good writing style.', 'Not sure about this particular approach.', 'This is really well done and helpful.', 'I think this approach could be improved by adding more examples and providing clearer explanations.', 'Very insightful analysis here.', 'This could benefit from additional context.', 'Outstanding quality and attention to detail.', 'Would you mind elaborating on this point?', 'I strongly support this direction.', 'More background information would be helpful.', 'Excellent demonstration of best practices.', 'I have some concerns about this method.', 'This is exceptionally well-crafted and informative.', 'Consider adding more specific examples to strengthen this argument.', 'Impressive work on this section.', 'This area requires further development.', 'Brilliant insight and well-articulated thoughts.', 'Can you provide more clarification on this topic?', 'I fully endorse this strategy.', 'Additional supporting evidence would strengthen this point.', 'Outstanding example of clear and effective communication.', 'This is remarkably well-executed and valuable.', 'This would be enhanced with more concrete illustrations and detailed explanations.'];

// Removed falsy values from nested object.
const cleanEmptyObject = object => {
  if (object === null || typeof object !== 'object' || Array.isArray(object)) {
    return object;
  }
  const cleanedNestedObjects = Object.entries(object).map(([key, value]) => [key, cleanEmptyObject(value)]).filter(([, value]) => value !== undefined);
  return !cleanedNestedObjects.length ? undefined : Object.fromEntries(cleanedNestedObjects);
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/comment-edit-link.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
/**
 * WordPress dependencies
 */












/**
 * Internal dependencies
 */


function flattenBlocks(blocks) {
  const result = [];
  blocks.forEach(block => {
    result.push(block);
    result.push(...flattenBlocks(block.innerBlocks));
  });
  return result;
}
const withBlockCommentingDataGeneratorControl = BlockEdit => props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    blockCommentId
  } = attributes;
  const [numberOfComments, setNumberOfComments] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(10);
  const [oldestCommentDays, setOldestCommentDays] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(30);
  const [isGeneratingComments, setIsGeneratingComments] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    saveEntityRecord,
    deleteEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__.store);
  const {
    postId,
    postType,
    users,
    isLoadingUsers
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getCurrentPostId,
      getCurrentPostType
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    const {
      getUsers,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
    const query = {
      who: 'authors',
      per_page: -1,
      _fields: 'id,slug',
      context: 'view'
    };
    return {
      postId: getCurrentPostId(),
      postType: getCurrentPostType(),
      users: getUsers(query),
      isLoadingUsers: isResolving('getUsers', [query])
    };
  }, []);
  if (!postId || !postType || postType !== 'post' && postType !== 'page' || !users?.length || (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__.isUnmodifiedDefaultBlock)(clientId)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(BlockEdit, {
      ...props
    });
  }
  const testUserIds = users.filter(user => user.slug.startsWith('test_user_')).map(user => user.id);
  if (!testUserIds.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(BlockEdit, {
      ...props
    });
  }
  const generateComments = async () => {
    setIsGeneratingComments(true);
    const randomizedTestUserIds = [...testUserIds].sort(() => Math.random() - 0.5).slice(0, numberOfComments);
    try {
      if (blockCommentId) {
        await deleteEntityRecord('root', 'comment', blockCommentId, {
          force: true
        }, {
          throwOnError: true
        });
        setAttributes({
          blockCommentId: undefined,
          metadata: (0,_utils__WEBPACK_IMPORTED_MODULE_11__.cleanEmptyObject)({
            ...attributes?.metadata,
            commentId: undefined
          })
        });
      }
      const randomDates = Array.from({
        length: numberOfComments
      }, () => new Date(Date.now() - Math.random() * oldestCommentDays * 24 * 60 * 60 * 1000));
      randomDates.sort((a, b) => a.getTime() - b.getTime());
      const [firstUserId, ...restUserIds] = randomizedTestUserIds;
      const firstComment = await saveEntityRecord('root', 'comment', {
        post: postId,
        content: _utils__WEBPACK_IMPORTED_MODULE_11__.COMMENT_CONTENT_STRINGS[Math.floor(Math.random() * _utils__WEBPACK_IMPORTED_MODULE_11__.COMMENT_CONTENT_STRINGS.length)],
        comment_type: 'block_comment',
        comment_approved: 0,
        author: firstUserId,
        date: randomDates[0].toISOString()
      }, {
        throwOnError: true
      });
      if ((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.hasFilter)('blocks.registerBlockType', 'block-comment/modify-core-block-attributes')) {
        setAttributes({
          blockCommentId: firstComment.id
        });
      } else {
        setAttributes({
          metadata: {
            ...attributes?.metadata,
            commentId: firstComment.id
          }
        });
      }
      await Promise.all(restUserIds.map((userId, index) => {
        const commentContent = _utils__WEBPACK_IMPORTED_MODULE_11__.COMMENT_CONTENT_STRINGS[Math.floor(Math.random() * _utils__WEBPACK_IMPORTED_MODULE_11__.COMMENT_CONTENT_STRINGS.length)];
        return saveEntityRecord('root', 'comment', {
          post: postId,
          content: commentContent,
          comment_type: 'block_comment',
          comment_approved: 0,
          author: userId,
          parent: firstComment.id,
          date: randomDates[index + 1].toISOString()
        }, {
          throwOnError: true
        });
      }));
      createNotice('success', 'Comments generated successfully.', {
        type: 'snackbar',
        isDismissible: true
      });
    } catch (error) {
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : 'An error occurred while performing adding comments.';
      createNotice('error', errorMessage, {
        type: 'snackbar',
        isDismissible: true
      });
    } finally {
      setIsGeneratingComments(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(BlockEdit, {
      ...props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "Block Comment",
        children: isLoadingUsers ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {
            marginBottom: 4,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
              status: "warning",
              isDismissible: false,
              children: "Note: Generating new comments will delete all existing comment."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true,
            label: "Number of Comments",
            value: numberOfComments,
            onChange: setNumberOfComments,
            min: 1,
            max: 100,
            help: "The number of comments to generate."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true,
            label: "Days back for oldest comment",
            value: oldestCommentDays,
            onChange: setOldestCommentDays,
            min: 1,
            max: 700,
            help: "Comments will be generated between the selected date and today."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            accessibleWhenDisabled: true,
            isBusy: isGeneratingComments,
            variant: "primary",
            __next40pxDefaultSize: true,
            disabled: isGeneratingComments,
            onClick: generateComments,
            children: "Generate Comments"
          })]
        })
      })
    })]
  });
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'block-commenting-data-generator', withBlockCommentingDataGeneratorControl);
const BlockCommentingDataGeneratorPluginSidebar = () => {
  const [isDeletingComments, setIsDeletingComments] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__.store);
  const {
    deleteEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    updateBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    postId,
    postType,
    blocks,
    getBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getCurrentPostId,
      getCurrentPostType
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    return {
      postId: getCurrentPostId(),
      postType: getCurrentPostType(),
      blocks: select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).getBlocks(),
      getBlockAttributes: select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).getBlockAttributes
    };
  }, []);
  const {
    records: comments
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.useEntityRecords)('root', 'comment', {
    post: postId,
    type: 'block_comment',
    status: 'all',
    per_page: -1
  }, {
    enabled: !!postId && typeof postId === 'number'
  });
  if (!postId || !postType || postType !== 'post' && postType !== 'page') {
    return null;
  }
  const deleteAllComments = async () => {
    setIsDeletingComments(true);
    try {
      const flatBlocks = flattenBlocks(blocks);
      if (flatBlocks.length > 0) {
        const clientIds = flatBlocks.map(block => block.clientId);
        const newAttributes = {};
        clientIds.forEach(clientId => {
          const attributes = getBlockAttributes(clientId);
          newAttributes[clientId] = {
            ...attributes,
            blockCommentId: undefined,
            metadata: (0,_utils__WEBPACK_IMPORTED_MODULE_11__.cleanEmptyObject)({
              ...attributes?.metadata,
              commentId: undefined
            })
          };
        });
        updateBlockAttributes(clientIds, newAttributes, {
          uniqueByBlock: true
        });
      }
      await Promise.all(comments.map(comment => deleteEntityRecord('root', 'comment', comment.id, {
        force: true
      }, {
        throwOnError: true
      })));
      createNotice('success', 'All block comments deleted successfully.', {
        type: 'snackbar',
        isDismissible: true
      });
    } catch (error) {
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : 'An error occurred while performing adding comments.';
      createNotice('error', errorMessage, {
        type: 'snackbar',
        isDismissible: true
      });
    } finally {
      setIsDeletingComments(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.PluginSidebarMoreMenuItem, {
      target: "block-commenting-data-generator",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
      children: "Block Commenting Data Generator"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.PluginSidebar, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
      title: "Block Commenting Data Generator",
      name: "block-commenting-data-generator",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {
        padding: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
          children: "Permanently delete all block comments from current post."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          __next40pxDefaultSize: true,
          accessibleWhenDisabled: true,
          variant: "primary",
          disabled: isDeletingComments || !comments?.length,
          isBusy: isDeletingComments,
          onClick: deleteAllComments,
          children: "Delete all block comments"
        })]
      })
    })]
  });
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__.registerPlugin)('block-commenting-data-generator', {
  render: BlockCommentingDataGeneratorPluginSidebar
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map