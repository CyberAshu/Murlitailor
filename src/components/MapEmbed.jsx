import React from 'react';

export default function MapEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <iframe
        title="Murli Tailors Location"
        src="https://www.google.com/maps?q=Khardon+Kalan,+Madhya+Pradesh+465339&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}


