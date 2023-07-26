import { checkRequestIsAuthorizedUser } from "actions/utils";

export const getUser = async () => {
    return await checkRequestIsAuthorizedUser();
}