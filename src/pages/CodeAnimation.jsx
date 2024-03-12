import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const CodeAnimation = () => (
  <div className="bg-slate-900 p-5 rounded-lg z-20 w-[500px]">
    <p className="tex-6xl font-bold">
      <TypeAnimation
        style={{ whiteSpace: 'pre', display: 'block' }}
        sequence={[
          'using System;\n\n public class Program \n{\n\t public static void Main(String[] args)\n\t{\n\t\tConsole.WriteLine("Hello World!");\n\t}\n}',
        ]}
        wrapper="span"
        speed={50}
      />
    </p>
  </div>
);

export default CodeAnimation;
