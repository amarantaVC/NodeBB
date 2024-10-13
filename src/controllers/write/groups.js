"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectInvite = exports.acceptInvite = exports.issueInvite = exports.getInvites = exports.reject = exports.accept = exports.getPending = exports.rescind = exports.grant = exports.leave = exports.join = exports.listMembers = exports.deleteGroup = exports.update = exports.create = exports.exists = exports.list = void 0;
/* eslint-disable import/no-import-module-exports */
const api = __importStar(require("../../api"));
/* eslint-disable import/no-import-module-exports */
const helpers = __importStar(require("../helpers"));
const list = async (req, res) => {
    // The following line calls a function in a module that hasn't been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res, await api.groups.list(req, Object.assign({}, req.query)));
};
exports.list = list;
const exists = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.exists = exists;
// export const create es una funcion que tiene como fin
const create = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const groupData = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const groupObj = await api.groups.create(groupData);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res, groupObj);
};
exports.create = create;
const update = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const groupObj = await api.groups.update(req, Object.assign(Object.assign({}, req.body), { slug: req.params.slug }));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res, groupObj);
};
exports.update = update;
const deleteGroup = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.delete(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.deleteGroup = deleteGroup;
const listMembers = async (req, res) => {
    const { slug } = req.params;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res, await api.groups.listMembers(req, Object.assign(Object.assign({}, req.query), { slug })));
};
exports.listMembers = listMembers;
const join = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.join(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.join = join;
const leave = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.leave(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.leave = leave;
const grant = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.grant(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.grant = grant;
const rescind = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.rescind(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.rescind = rescind;
const getPending = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const pending = await api.groups.getPending(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res, { pending });
};
exports.getPending = getPending;
const accept = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.accept(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.accept = accept;
const reject = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.reject(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.reject = reject;
const getInvites = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const invites = await api.groups.getInvites(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res, { invites });
};
exports.getInvites = getInvites;
const issueInvite = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.issueInvite(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.issueInvite = issueInvite;
const acceptInvite = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.acceptInvite(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.acceptInvite = acceptInvite;
const rejectInvite = async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await api.groups.rejectInvite(req, req.params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await helpers.formatApiResponse(200, res);
};
exports.rejectInvite = rejectInvite;
