// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: object/what_is.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type WhatIs struct {
	Index    string `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	Did      string `protobuf:"bytes,2,opt,name=did,proto3" json:"did,omitempty"`
	Document []byte `protobuf:"bytes,3,opt,name=document,proto3" json:"document,omitempty"`
	Creator  string `protobuf:"bytes,4,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *WhatIs) Reset()         { *m = WhatIs{} }
func (m *WhatIs) String() string { return proto.CompactTextString(m) }
func (*WhatIs) ProtoMessage()    {}
func (*WhatIs) Descriptor() ([]byte, []int) {
	return fileDescriptor_c95e2457e2fe7177, []int{0}
}
func (m *WhatIs) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *WhatIs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_WhatIs.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *WhatIs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WhatIs.Merge(m, src)
}
func (m *WhatIs) XXX_Size() int {
	return m.Size()
}
func (m *WhatIs) XXX_DiscardUnknown() {
	xxx_messageInfo_WhatIs.DiscardUnknown(m)
}

var xxx_messageInfo_WhatIs proto.InternalMessageInfo

func (m *WhatIs) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *WhatIs) GetDid() string {
	if m != nil {
		return m.Did
	}
	return ""
}

func (m *WhatIs) GetDocument() []byte {
	if m != nil {
		return m.Document
	}
	return nil
}

func (m *WhatIs) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*WhatIs)(nil), "sonrio.sonr.object.WhatIs")
}

func init() { proto.RegisterFile("object/what_is.proto", fileDescriptor_c95e2457e2fe7177) }

var fileDescriptor_c95e2457e2fe7177 = []byte{
	// 210 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xc9, 0x4f, 0xca, 0x4a,
	0x4d, 0x2e, 0xd1, 0x2f, 0xcf, 0x48, 0x2c, 0x89, 0xcf, 0x2c, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x12, 0x2a, 0xce, 0xcf, 0x2b, 0xca, 0xcc, 0xd7, 0x03, 0x51, 0x7a, 0x10, 0x15, 0x4a, 0x69,
	0x5c, 0x6c, 0xe1, 0x19, 0x89, 0x25, 0x9e, 0xc5, 0x42, 0x22, 0x5c, 0xac, 0x99, 0x79, 0x29, 0xa9,
	0x15, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41, 0x10, 0x8e, 0x90, 0x00, 0x17, 0x73, 0x4a, 0x66,
	0x8a, 0x04, 0x13, 0x58, 0x0c, 0xc4, 0x14, 0x92, 0xe2, 0xe2, 0x48, 0xc9, 0x4f, 0x2e, 0xcd, 0x4d,
	0xcd, 0x2b, 0x91, 0x60, 0x56, 0x60, 0xd4, 0xe0, 0x09, 0x82, 0xf3, 0x85, 0x24, 0xb8, 0xd8, 0x93,
	0x8b, 0x52, 0x13, 0x4b, 0xf2, 0x8b, 0x24, 0x58, 0xc0, 0x3a, 0x60, 0x5c, 0x27, 0xb7, 0x13, 0x8f,
	0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39, 0x86, 0x0b,
	0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88, 0xd2, 0x49, 0xcf, 0x2c, 0xc9, 0x28, 0x4d, 0xd2,
	0x4b, 0xce, 0xcf, 0xd5, 0x07, 0xb9, 0x4c, 0x37, 0x33, 0x5f, 0x3f, 0x29, 0x27, 0x3f, 0x39, 0x3b,
	0x39, 0x23, 0x31, 0x33, 0x4f, 0xbf, 0x42, 0x1f, 0xea, 0x97, 0x92, 0xca, 0x82, 0xd4, 0xe2, 0x24,
	0x36, 0xb0, 0x57, 0x8c, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff, 0xad, 0x4d, 0x16, 0x99, 0xe2, 0x00,
	0x00, 0x00,
}

func (m *WhatIs) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *WhatIs) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *WhatIs) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintWhatIs(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Document) > 0 {
		i -= len(m.Document)
		copy(dAtA[i:], m.Document)
		i = encodeVarintWhatIs(dAtA, i, uint64(len(m.Document)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Did) > 0 {
		i -= len(m.Did)
		copy(dAtA[i:], m.Did)
		i = encodeVarintWhatIs(dAtA, i, uint64(len(m.Did)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintWhatIs(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintWhatIs(dAtA []byte, offset int, v uint64) int {
	offset -= sovWhatIs(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *WhatIs) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovWhatIs(uint64(l))
	}
	l = len(m.Did)
	if l > 0 {
		n += 1 + l + sovWhatIs(uint64(l))
	}
	l = len(m.Document)
	if l > 0 {
		n += 1 + l + sovWhatIs(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovWhatIs(uint64(l))
	}
	return n
}

func sovWhatIs(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozWhatIs(x uint64) (n int) {
	return sovWhatIs(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *WhatIs) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowWhatIs
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: WhatIs: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: WhatIs: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWhatIs
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWhatIs
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWhatIs
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Did", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWhatIs
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWhatIs
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWhatIs
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Did = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Document", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWhatIs
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthWhatIs
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthWhatIs
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Document = append(m.Document[:0], dAtA[iNdEx:postIndex]...)
			if m.Document == nil {
				m.Document = []byte{}
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWhatIs
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWhatIs
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWhatIs
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipWhatIs(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthWhatIs
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipWhatIs(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowWhatIs
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowWhatIs
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowWhatIs
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthWhatIs
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupWhatIs
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthWhatIs
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthWhatIs        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowWhatIs          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupWhatIs = fmt.Errorf("proto: unexpected end of group")
)
