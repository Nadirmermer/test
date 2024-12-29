import React from 'react';

interface HealthAndMentalData {
  generalHealth: string;
  hospitalization: string;
  medications: string;
  medicationDetails: string;
  suicidalThoughts: string;
  suicidalPlanning: string;
  suicidalIntent: string;
  suicideAttempts: string;
  attemptDetails: string;
  severityAssessment: string;
  currentProblems: string;
  emotionalState: string;
  recentActivities: string;
  socialRelations: string;
  livingArrangement: string;
  substanceUse: string;
}

interface HealthAndMentalSectionProps {
  data: HealthAndMentalData;
  onUpdate: (data: HealthAndMentalData) => void;
}

export function HealthAndMentalSection({ data, onUpdate }: HealthAndMentalSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            SAĞLIK SORUNLARI
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Genel sağlık durumunuz nasıldır? (Herhangi bir sağlık sorununuz var mı?)
              </label>
              <textarea
                value={data.generalHealth}
                onChange={e => onUpdate({...data, generalHealth: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Herhangi bir sağlık sorununuz için hastaneye yattığınız oldu mu? (Ne için yattınız?)
              </label>
              <textarea
                value={data.hospitalization}
                onChange={e => onUpdate({...data, hospitalization: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Herhangi bir ilaç, vitamin ya da başka bir besin desteğini (söylediklerinizin dışında) kullanıyor musunuz?
              </label>
              <textarea
                value={data.medications}
                onChange={e => onUpdate({...data, medications: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={2}
                placeholder="YANIT EVETSE: Ne alıyorsunuz ve hangi dozda?"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            KENDİNİ ÖLDÜRME DÜŞÜNCELERİ VE DAVRANIŞLARI
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <strong>DÜŞÜNCELERİ DEĞERLENDİRİN:</strong> Ölmüş olmayı istediğiniz ya da uyuyup da uyanmak istemediğiniz oldu mu? (Bunu biraz açar mısınız?)
              </label>
              <textarea
                value={data.suicidalThoughts}
                onChange={e => onUpdate({...data, suicidalThoughts: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <strong>TASARI VE YÖNTEMİ DEĞERLENDİRİN:</strong> Geçen hafta, gerçekten bunu nasıl yapabileceğinizi düşündünüz mü? (Ne yapmayı düşündüğünüzü biraz açar mısınız?) Bunu yerine getirebilmek için neye gerek duyacağınızı düşündünüz mü? (Bunu biraz açar mısınız? Bunu yapmak için araç ve gereçleriniz var mı?)
              </label>
              <textarea
                value={data.suicidalPlanning}
                onChange={e => onUpdate({...data, suicidalPlanning: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <strong>KENDİNİ ÖLDÜRME GİRİŞİMİ</strong>
              </label>
              <div className="pl-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <strong>GİRİŞİMİ DEĞERLENDİRİN:</strong> Hiç kendinizi öldürmeye kalkıştığınız oldu mu?
                  </label>
                  <textarea
                    value={data.suicideAttempts}
                    onChange={e => onUpdate({...data, suicideAttempts: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ne yaptınız? (Ne olduğunu anlatır mısınız?) Yaşamınızı sonlandırmaya mı çalıştınız?
                  </label>
                  <textarea
                    value={data.attemptDetails}
                    onChange={e => onUpdate({...data, attemptDetails: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <strong>BİRDEN ÇOK GİRİŞİM VARSA:</strong> Hangi girişiminiz en ağır sağlık sorunlarına yol açtı (acil servise gitme, hastaneye yatırılmayı gerektirme, yoğun bakım tedavisine gerek olması)?
              </label>
              <textarea
                value={data.severityAssessment}
                onChange={e => onUpdate({...data, severityAssessment: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={3}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            O SIRADAKİ DİĞER SORUNLAR
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Geçen ay herhangi başka bir sorununuz oldu mu? (İşyerinde, evde işler ve diğer insanlarla olan ilişkiler nasıl gidiyor?)
              </label>
              <textarea
                value={data.currentProblems}
                onChange={e => onUpdate({...data, currentProblems: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Duygusal durumunuz nasıl?
              </label>
              <textarea
                value={data.emotionalState}
                onChange={e => onUpdate({...data, emotionalState: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                İçinizden, genellikle kimle birlikte oluyorsunuz? (Genellikle tek başına mı, yoksa diğer insanlarla birlikte mi oluyorsunuz?)
              </label>
              <textarea
                value={data.socialRelations}
                onChange={e => onUpdate({...data, socialRelations: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Geçen ay herhangi bir yasadışı madde kullandınız mı? Size verilen ilaçları önerildiğinden daha çok kullandınız mı ya da ilaçlarınızı zamanından önce bitirmek söz konusu oldu mu?
              </label>
              <textarea
                value={data.substanceUse}
                onChange={e => onUpdate({...data, substanceUse: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}