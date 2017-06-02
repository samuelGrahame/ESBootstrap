using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
    public struct Vector4
    {
        public Union<string, int, float> X;
        public Union<string, int, float> Y;
        public Union<string, int, float> Z;
        public Union<string, int, float> M;

        public Vector4(Union<string, int, float> x, Union<string, int, float> y, Union<string, int, float> z, Union<string, int, float> m)
        {
            X = x;
            Y = y;
            Z = z;
            M = m;
        }

        public Vector4(Vector2 location, Vector2 size)
        {
            X = location.X;
            Y = location.Y;
            Z = size.X;
            M = size.Y;
        }

        public Vector4(Vector4 vector4)
        {
            X = vector4.X;
            Y = vector4.Y;
            Z = vector4.Z;
            M = vector4.M;
        }

        public Union<string, int, float> GetX()
        {
            return X;
        }

        public Union<string, int, float> GetY()
        {
            return Y;
        }

        public Union<string, int, float> GetWidth()
        {
            return Z;
        }

        public Union<string, int, float> GetHeight()
        {
            return M;
        }

        public Vector2 GetLocation()
        {
            return new Vector2(X, Y);
        }

        public Vector2 GetSize()
        {
            return new Vector2(Z, M);
        }
    }
}
