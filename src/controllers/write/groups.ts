/* eslint-disable import/no-import-module-exports */
import { Request, Response } from 'express';
/* eslint-disable import/no-import-module-exports */
import * as api from '../../api';
/* eslint-disable import/no-import-module-exports */
import * as helpers from '../helpers';

export const Groups = {
	list: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res, await api.groups.list(req, { ...req.query }));
	},

	exists: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	// export const create es una funcion que tiene como fin
	create: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		const groupData: unknown = req.body;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		const groupObj: unknown = await api.groups.create(groupData as Record<string, unknown>);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res, groupObj);
	},

	update: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		const groupObj = await api.groups.update(req, {
			...req.body,
			slug: req.params.slug,
		}) as Record<string, unknown>;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res, groupObj);
	},

	deleteGroup: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.delete(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	listMembers: async (req: Request, res: Response): Promise<void> => {
		const { slug } = req.params;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res, await api.groups.listMembers(req, { ...req.query, slug }));
	},

	join: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.join(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	leave: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.leave(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	grant: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.grant(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	rescind: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.rescind(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	getPending: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		const pending: unknown = await api.groups.getPending(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res, { pending });
	},

	accept: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.accept(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	reject: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.reject(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	getInvites: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		const invites: unknown = await api.groups.getInvites(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res, { invites });
	},

	issueInvite: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.issueInvite(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	acceptInvite: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.acceptInvite(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},

	rejectInvite: async (req: Request, res: Response): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await api.groups.rejectInvite(req, req.params);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await helpers.formatApiResponse(200, res);
	},
};

// Exporta el objeto Groups completo
export default Groups;
