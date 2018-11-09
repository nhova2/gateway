import { FuseUtils } from '@fuse/utils';

export class BonCommande {
    id: string;
    numero: string;
    avatar: string;
    dateEmission: string;
    dateReglement: string;
    acheteurId: string;
    reglementCmdId: string;

     /**
     * Constructor
     *
     * @param suivi
     */
    constructor(suivi)
    {
        {
            this.id = suivi.id || FuseUtils.generateGUID();
            this.numero = suivi.numero || '';
            this.dateEmission = suivi.dateEmission || '';
            this.avatar = suivi.avatar || 'assets/images/avatars/commande.png';
            this.dateReglement = suivi.dateReglement || '';
            this.acheteurId = suivi.acheteurId || '';
            this.reglementCmdId = suivi.reglementCmdId || '';
        }
    }
}